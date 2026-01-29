# Node.js + PostgreSQL ORM REST API (Prisma)

A backend REST API built using **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**.  
This project focuses on understanding **ORM-based database interaction**, schema modeling, and clean backend architecture.

---

## 🚀 Features

- RESTful APIs for **Users** and **Tasks**
- PostgreSQL database with relations
- Prisma ORM for database access
- Schema-first development using Prisma
- Automatic migrations
- MVC-style project structure
- Environment-based configuration

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **dotenv**

---

## 📁 Project Structure
```
node-postgresql-orm/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ └── prisma.js
│ ├── routes/
│ │ ├── user.routes.js
│ │ └── task.routes.js
│ ├── controllers/
│ │ ├── user.controller.js
│ │ └── task.controller.js
│ └── models/
│ ├── user.model.js
│ └── task.model.js
├── .env
└── package.json
```
🗄 Database Configuration

Create a .env file:

PORT=8080
DATABASE_URL=postgresql://postgres:password@localhost:5432/task_manager

📜 Prisma Schema Example
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  tasks Task[]
}

model Task {
  id      Int     @id @default(autoincrement())
  title   String
  done    Boolean @default(false)
  userId  Int
  user    User    @relation(fields: [userId], references: [id])
}

🧱 Run Prisma Migrations
npx prisma migrate dev --name init

📌 API Endpoints
Users

POST /users → Create user

GET /users → Get all users

Tasks

POST /tasks → Create task for a user

GET /tasks → Get all tasks