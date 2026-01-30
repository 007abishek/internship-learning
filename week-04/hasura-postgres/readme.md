# Hasura + PostgreSQL (Docker) Setup

This project demonstrates how to run **Hasura GraphQL Engine using Docker**, connect it to a **local PostgreSQL database**, and manage schema using **Hasura CLI migrations and metadata**.

This setup follows **current Hasura best practices** (2025–2026) and is suitable for **learning, projects, and interviews**.

---

## 🧱 Tech Stack

- **Hasura GraphQL Engine** (Docker)
- **PostgreSQL** (local / pgAdmin)
- **Hasura CLI** (migrations & metadata)
- **Docker Desktop**
- **GraphQL**

---

## 📁 Project Structure

```
hasura-postgres/
├── db/
│ ├── schema.sql # Reference schema (documentation only)
│ └── seed.sql # Optional seed data
│
├── env/
│ ├── .env.example
│ └── .env.local # Local secrets (not committed)
│
├── hasura/
│ ├── metadata/ # Auto-managed Hasura metadata
│ ├── migrations/
│ │ └── default/
│ │ └── <timestamp>_init_users_table/
│ │ ├── up.sql
│ │ └── down.sql
│ ├── seeds/ # Optional Hasura seeds
│ └── config.yaml # CLI configuration
│
└── README.md
```