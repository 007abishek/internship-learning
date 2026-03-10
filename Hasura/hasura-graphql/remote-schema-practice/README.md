# Hasura Remote Schema Practice

This folder now includes a full remote schema practice kit with the major concepts you need in Hasura.

## Concepts Covered

1. Basic remote schema registration
2. `forward_client_headers` behavior
3. Static headers from env (`x-remote-api-key`)
4. Role-aware resolvers (`x-hasura-role`)
5. User-aware resolvers (`x-hasura-user-id`)
6. Queries + mutations in remote schema
7. Filters, sorting, pagination-style args
8. Union type responses (`SearchResult`)
9. Remote schema customization (namespace + type prefix/mapping)
10. Remote schema permissions (example metadata)
11. DB table -> remote schema relationship (example metadata)

## Files

- `src/index.js`: GraphQL service with auth + role behavior and rich schema.
- `metadata/remote_schemas.yaml`: remote schema registration + headers + customization.
- `metadata/remote_schema_permissions.example.yaml`: role-based schema visibility example.
- `metadata/remote_relationships.example.yaml`: table-to-remote relationship example.
- `.env.example`: required env variables.

## 1) Run the Remote GraphQL Service

```bash
cd Hasura/hasura-graphql/remote-schema-practice
npm install
npm run dev
```

Endpoint:

`http://localhost:4001/graphql`

## 2) Set Environment Variables

Use `.env.example` values:

```bash
PRACTICE_REMOTE_SCHEMA_URL=http://host.docker.internal:4001/graphql
PRACTICE_REMOTE_SCHEMA_API_KEY=super-secret-key
REMOTE_API_KEY=super-secret-key
```

Notes:
- `PRACTICE_REMOTE_SCHEMA_API_KEY` is used by Hasura metadata static header.
- `REMOTE_API_KEY` is checked by this remote service at runtime.

## 3) Register in Hasura

Use [metadata/remote_schemas.yaml](./metadata/remote_schemas.yaml) or add through Console.

If Hasura is inside Docker:
- URL should usually be `http://host.docker.internal:4001/graphql`

If Hasura runs on host machine:
- URL can be `http://localhost:4001/graphql`

Apply metadata:

```bash
hasura metadata apply --project Hasura/hasura-graphql/hasura-local
```

## 4) Practice Operations

### A) Basic query

```graphql
query {
  rs_remoteHello(name: "Abish")
}
```

### B) Header-based identity

Set request headers in Hasura API explorer:

```json
{
  "x-hasura-role": "user",
  "x-hasura-user-id": "7"
}
```

Then run:

```graphql
query {
  rs_whoAmI {
    userId
    role
    favoriteBook {
      id
      title
    }
  }
}
```

### C) Advanced list query (filter/sort/limit/offset)

```graphql
query {
  rs_booksAdvanced(
    filter: { titleContains: "Hasura" }
    sort: TITLE_ASC
    limit: 5
    offset: 0
  ) {
    id
    title
    author
  }
}
```

### D) Mutation practice

```graphql
mutation {
  rs_createBook(input: { title: "Remote Deep Dive", author: "Abish" }) {
    id
    title
    author
  }
}
```

### E) Union response practice

```graphql
query {
  rs_search(term: "hasura") {
    __typename
    ... on RS_Book {
      id
      title
    }
    ... on UserIdentity {
      userId
      role
    }
  }
}
```

### F) Admin-only field

Use headers:

```json
{
  "x-hasura-role": "admin",
  "x-hasura-user-id": "1"
}
```

Then run:

```graphql
query {
  rs_adminStats {
    totalBooks
    uniqueAuthors
  }
}
```

## 5) Permissions and Relationships

- For remote schema permissions, use:
  [metadata/remote_schema_permissions.example.yaml](./metadata/remote_schema_permissions.example.yaml)
- For DB table -> remote schema relationship, use:
  [metadata/remote_relationships.example.yaml](./metadata/remote_relationships.example.yaml)

These are examples to copy into your real `hasura-local/metadata` objects depending on your source/table names.
