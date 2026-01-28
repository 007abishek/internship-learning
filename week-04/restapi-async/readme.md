# Express REST API with Async

This project demonstrates how to build a backend application using **Express.js** with **RESTful APIs** and **asynchronous programming**.  
It covers routing, middleware, request/response handling, async/await, and proper project structure.

---

## 📌 Features Covered

- Express app setup
- Middleware (logging, JSON parsing)
- RESTful routing (GET, POST, DELETE)
- Dynamic route parameters (`req.params`)
- Query strings (`req.query`)
- Request body handling (`req.body`)
- Asynchronous operations using `async/await`
- Centralized error handling
- 404 fallback handling
- Proper folder structure (routes, controllers, services)

---

## 📂 Project Structure
```
restapi-async/
│
├── src/
│ ├── app.js # Express app configuration
│ ├── server.js # Server startup
│ │
│ ├── routes/
│ │ └── user.routes.js # Route definitions
│ │
│ ├── controllers/
│ │ └── user.controller.js # Request/response logic
│ │
│ ├── services/
│ │ └── user.service.js # Async business logic
│ │
│ ├── middlewares/
│ │ ├── logger.js
│ │ └── errorHandler.js
│ │
│ └── utils/
│ └── asyncHandler.js
│
├── package.json
├── README.md
└── node_modules/

```