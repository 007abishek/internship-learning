# GraphQL Integration with React (Apollo Client v4)

This project demonstrates how to integrate **GraphQL** into a **React application** using **Apollo Client v4** with **Vite**.  
It focuses on clean architecture, scalability, and best practices for real-world applications.

---

## 🚀 What is GraphQL?

GraphQL is a **query language for APIs** and a **runtime** that allows clients to request **exactly the data they need** from a server using a **single endpoint**, avoiding over-fetching and under-fetching.

---

## 🧠 Key Features

- Client-driven data fetching
- Single GraphQL endpoint
- Apollo Client v4 with explicit `HttpLink`
- Built-in caching with `InMemoryCache`
- Clean and scalable folder structure
- Automatic loading & error handling

---

## 🛠 Tech Stack

- React
- Vite
- GraphQL
- Apollo Client v4

---
Folder structure
src/
├── apollo/
│   └── client.js        # GraphQL (Apollo) connection setup
│
├── graphql/
│   └── queries.js       # All GraphQL queries
│
├── components/
│   └── UserList.jsx     # UI component using GraphQL data
│
├── App.jsx              # Application layout
└── main.jsx             # Application entry point + ApolloProvider



---

## ⚙️ Installation & Setup


npm install
npm install @apollo/client graphql
npm run dev

🔗 GraphQL API Used

Public API: https://graphqlzero.almansi.me/api

🔄 Data Flow
React Component
   ↓ useQuery
GraphQL Query
   ↓
Apollo Client
   ↓ HttpLink
GraphQL Server
   ↓
Apollo Cache
   ↓
UI Updates Automatically

📌 Apollo Client v4 Notes

React hooks are imported from:

@apollo/client/react


HttpLink is mandatory (no uri shortcut)

Better modularity and tree-shaking compared to v3

🧠 Key Takeaways

GraphQL allows precise data fetching

Apollo simplifies GraphQL integration in React

Clean separation of concerns improves scalability

Version awareness is critical (Apollo v4 changes)
