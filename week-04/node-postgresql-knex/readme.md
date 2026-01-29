# Node.js + PostgreSQL + Knex REST API

A backend REST API built using **Node.js**, **Express**, **PostgreSQL**, and **Knex.js**, following a clean **MVC architecture**.  
The project also includes **integration testing** using **Jest** and **Supertest**.

---

## 🚀 Features

- RESTful APIs for **Users** and **Tasks**
- PostgreSQL database with proper **relations & constraints**
- Knex.js as a **Query Builder**
- MVC folder structure
- Environment-based configuration
- Integration testing with Jest
- Foreign key relationships (Users → Tasks)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Knex.js**
- **Jest & Supertest**
- **dotenv**

---

## 📁 Project Structure

```
node-postgresql-knex/
├── src/
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ └── knex.js
│ ├── routes/
│ │ ├── user.routes.js
│ │ └── task.routes.js
│ ├── controllers/
│ │ ├── user.controller.js
│ │ └── task.controller.js
│ └── models/
│ ├── user.model.js
│ └── task.model.js
├── db/
│ └── migrations/
├── tests/
│ ├── users.test.js
│ └── tasks.test.js
├── knexfile.js
├── .env
└── package.json
```
3️⃣ Configure environment variables

Create a .env file:

PORT=8081
DATABASE_URL=postgresql://postgres:password@localhost:5432/task_manager

🗄 Database Setup
Run migrations
npx knex migrate:latest


This will create:

users table

tasks table with foreign key relationship

📌 API Endpoints
Users

POST /users → Create user

GET /users → Get all users

Tasks

POST /tasks → Create task for a user

GET /tasks → Get all tasks with user info

🧪 Testing

Integration tests are written using Jest and Supertest.
