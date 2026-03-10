const { createServer } = require("node:http");
const { GraphQLError } = require("graphql");
const { createSchema, createYoga } = require("graphql-yoga");

let books = [
  { id: "1", title: "Pragmatic GraphQL", author: "Alex Doe" },
  { id: "2", title: "Hasura in Practice", author: "Riya Das" },
  { id: "3", title: "Remote Schema Patterns", author: "Sam Lee" }
];

function getSession(request) {
  const role = request.headers.get("x-hasura-role") || "anonymous";
  const userId = request.headers.get("x-hasura-user-id") || null;
  const remoteApiKey = request.headers.get("x-remote-api-key");
  const expectedApiKey = process.env.REMOTE_API_KEY || null;

  if (expectedApiKey && remoteApiKey !== expectedApiKey) {
    throw new GraphQLError("Missing or invalid x-remote-api-key", {
      extensions: { code: "UNAUTHENTICATED" }
    });
  }

  return { role, userId };
}

function requireRole(role, expectedRole) {
  if (role !== expectedRole) {
    throw new GraphQLError(`Only ${expectedRole} role can access this field`, {
      extensions: { code: "FORBIDDEN" }
    });
  }
}

function requireUser(userId) {
  if (!userId) {
    throw new GraphQLError("x-hasura-user-id is required for this operation", {
      extensions: { code: "UNAUTHENTICATED" }
    });
  }
}

function nextBookId() {
  const maxId = books.reduce((acc, book) => Math.max(acc, Number(book.id)), 0);
  return String(maxId + 1);
}

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    enum BookSort {
      TITLE_ASC
      TITLE_DESC
    }

    input BookFilterInput {
      author: String
      titleContains: String
    }

    input CreateBookInput {
      title: String!
      author: String!
    }

    type Book {
      id: ID!
      title: String!
      author: String!
    }

    type UserProfile {
      userId: ID!
      role: String!
      favoriteBook: Book
    }

    type AdminStats {
      totalBooks: Int!
      uniqueAuthors: Int!
    }

    union SearchResult = Book | UserProfile

    type Query {
      remoteHello(name: String = "Developer"): String!
      whoAmI: UserProfile!
      userProfile(userId: ID!): UserProfile!
      books: [Book!]!
      booksAdvanced(
        filter: BookFilterInput
        sort: BookSort = TITLE_ASC
        limit: Int = 10
        offset: Int = 0
      ): [Book!]!
      bookById(id: ID!): Book
      search(term: String!): [SearchResult!]!
      adminStats: AdminStats!
    }

    type Mutation {
      createBook(input: CreateBookInput!): Book!
      updateBookTitle(id: ID!, title: String!): Book!
      deleteBook(id: ID!): Boolean!
    }
  `,
  resolvers: {
    SearchResult: {
      __resolveType(obj) {
        if ("title" in obj) return "Book";
        if ("userId" in obj) return "UserProfile";
        return null;
      }
    },
    Query: {
      remoteHello: (_, { name }, context) => {
        const { role } = getSession(context.request);
        return `Hello ${name}, response from remote schema. role=${role}`;
      },
      books: () => books,
      whoAmI: (_, __, context) => {
        const { role, userId } = getSession(context.request);
        return {
          userId: userId || "guest",
          role,
          favoriteBook: books[0]
        };
      },
      userProfile: (_, { userId }, context) => {
        const { role } = getSession(context.request);
        return {
          userId,
          role,
          favoriteBook: books[0]
        };
      },
      booksAdvanced: (_, { filter, sort, limit, offset }) => {
        let filtered = [...books];

        if (filter?.author) {
          filtered = filtered.filter((book) => book.author === filter.author);
        }
        if (filter?.titleContains) {
          const term = filter.titleContains.toLowerCase();
          filtered = filtered.filter((book) => book.title.toLowerCase().includes(term));
        }

        filtered.sort((a, b) => {
          if (sort === "TITLE_DESC") return b.title.localeCompare(a.title);
          return a.title.localeCompare(b.title);
        });

        return filtered.slice(offset, offset + limit);
      },
      bookById: (_, { id }) => books.find((book) => book.id === id) || null,
      search: (_, { term }, context) => {
        const { role, userId } = getSession(context.request);
        const lowered = term.toLowerCase();

        const matches = books.filter((book) => {
          return (
            book.title.toLowerCase().includes(lowered) ||
            book.author.toLowerCase().includes(lowered)
          );
        });

        if (userId && `user-${userId}`.includes(lowered)) {
          matches.push({
            userId,
            role,
            favoriteBook: books[1] || null
          });
        }

        return matches;
      },
      adminStats: (_, __, context) => {
        const { role } = getSession(context.request);
        requireRole(role, "admin");

        return {
          totalBooks: books.length,
          uniqueAuthors: new Set(books.map((book) => book.author)).size
        };
      }
    },
    Mutation: {
      createBook: (_, { input }, context) => {
        const { userId } = getSession(context.request);
        requireUser(userId);

        const newBook = { id: nextBookId(), title: input.title, author: input.author };
        books = [...books, newBook];
        return newBook;
      },
      updateBookTitle: (_, { id, title }, context) => {
        const { userId } = getSession(context.request);
        requireUser(userId);

        const existing = books.find((book) => book.id === id);
        if (!existing) {
          throw new GraphQLError("Book not found", {
            extensions: { code: "NOT_FOUND" }
          });
        }

        existing.title = title;
        return existing;
      },
      deleteBook: (_, { id }, context) => {
        const { role } = getSession(context.request);
        requireRole(role, "admin");

        const originalLength = books.length;
        books = books.filter((book) => book.id !== id);
        return books.length !== originalLength;
      }
    }
  }
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/graphql"
});

const port = Number(process.env.PORT || 4001);
const server = createServer(yoga);

server.listen(port, () => {
  console.log(`Remote schema server running on http://localhost:${port}/graphql`);
  console.log("Set REMOTE_API_KEY to require static header x-remote-api-key");
});
