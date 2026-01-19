# GraphQL Integration with React (Apollo Client v4)

This project demonstrates how to integrate **GraphQL** into a **React application** using **Apollo Client v4** with **Vite**. It focuses on clean architecture, scalability, and best practices for real-world applications.

## 🚀 What is GraphQL?

GraphQL is a **query language for APIs** and a **runtime** that allows clients to request **exactly the data they need** from a server using a **single endpoint**, avoiding over-fetching and under-fetching.

### Key Benefits

- **Precise Data Fetching** - Request only what you need
- **Single Endpoint** - No multiple API calls required
- **Strongly Typed** - Schema validation and autocompletion
- **Reduced Bandwidth** - No wasted data transfer
- **Better Developer Experience** - Predictable API queries

## 🧠 Key Features

- Client-driven data fetching with `useQuery` hook
- Single GraphQL endpoint integration
- Apollo Client v4 with explicit `HttpLink`
- Built-in caching with `InMemoryCache`
- Clean and scalable folder structure
- Automatic loading & error handling
- Type-safe queries with GraphQL

## 🛠 Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **GraphQL** - Query language for APIs
- **Apollo Client v4** - GraphQL client library
- **ESLint** - Code quality

## 📁 Project Structure

```
src/
├── apollo/
│   └── client.js           # Apollo Client setup with HttpLink
├── graphql/
│   └── queries.js          # GraphQL query definitions
├── components/
│   └── UserList.jsx        # React component using GraphQL
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point with ApolloProvider
├── App.css                 # Application styles
└── index.css               # Global styles
```

## 📋 Component Breakdown

### Apollo Client Setup (`apollo/client.js`)
- Initializes Apollo Client with `HttpLink` pointing to GraphQL endpoint
- Configures `InMemoryCache` for caching GraphQL responses
- No shortcut `uri` parameter—explicit `HttpLink` required in v4

### GraphQL Queries (`graphql/queries.js`)
- Defines all GraphQL queries used in the application
- Example: Fetching users with specific fields (id, name, email)

### UserList Component (`components/UserList.jsx`)
- Uses the `useQuery` hook to fetch data from GraphQL
- Displays loading and error states
- Renders user list from cached Apollo data

### App Component (`App.jsx`)
- Main application layout
- Wraps application with `ApolloProvider`
- Renders UserList component

## ⚙️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Apollo Client and GraphQL:**
   ```bash
   npm install @apollo/client graphql
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Available Commands

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🔗 GraphQL API Used

This project uses the public GraphQL API: **https://graphqlzero.almansi.me/api**

This is a free API for learning and testing purposes. It provides sample data for posts, comments, users, and more.

## 🔄 Data Flow

```
React Component (UserList.jsx)
         ↓ useQuery(GET_USERS)
GraphQL Query Definition
         ↓
Apollo Client
         ↓ HttpLink
GraphQL Server (graphqlzero.almansi.me)
         ↓
Apollo InMemoryCache
         ↓
Component Re-render with Data
```

## 📌 Apollo Client v4 Key Differences

| Feature | Apollo v3 | Apollo v4 |
|---------|-----------|-----------|
| HttpLink | Optional (uri shortcut) | **Mandatory** (explicit) |
| React Imports | `@apollo/client` | `@apollo/client/react` |
| Modularity | Less modular | **Better tree-shaking** |
| Bundle Size | Larger | **Smaller** |

## 💡 Example Usage

### Defining a Query (`graphql/queries.js`)
```javascript
import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;
```

### Using the Query in a Component
```javascript
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

## 🎯 Key Concepts

### 1. useQuery Hook
- Fetches data from GraphQL server
- Returns `loading`, `error`, and `data` states
- Automatically caches responses

### 2. Apollo Cache (InMemoryCache)
- Stores GraphQL responses in memory
- Reduces server requests for repeated queries
- Improves application performance

### 3. HttpLink
- Creates connection to GraphQL endpoint
- Handles HTTP requests/responses
- Mandatory in Apollo Client v4

### 4. GraphQL Document (gql)
- Tagged template literal for query definitions
- Provides syntax highlighting and error checking
- Type-safe query definitions

## 🧠 Best Practices

✅ **Do:**
- Keep queries in separate `graphql/` folder
- Use Apollo cache for frequently accessed data
- Handle loading and error states
- Use `useCallback` with queries to optimize re-renders
- Organize queries by feature/module

❌ **Don't:**
- Make unnecessary API calls from components
- Ignore loading/error states in UI
- Create new query objects on every render
- Fetch all data and filter on client-side
- Hardcode GraphQL queries in components

## 🔍 Testing Queries

You can test GraphQL queries directly at: https://graphqlzero.almansi.me/api

Use tools like:
- **GraphQL Playground** (built-in at endpoint)
- **Insomnia** (REST/GraphQL client)
- **Postman** (supports GraphQL)
- **Apollo DevTools** (Chrome extension)

## 📚 Resources

- [GraphQL Official Documentation](https://graphql.org/)
- [Apollo Client v4 Documentation](https://www.apollographql.com/docs/react/)
- [Apollo Client Hooks Reference](https://www.apollographql.com/docs/react/data/queries/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Apollo DevTools](https://www.apollographql.com/docs/devtools/)

