# React REST API Integration (User List)

This project demonstrates **how to integrate React with a REST API** using a **scalable and industry-standard folder structure**.  
It fetches user data from a public REST API and displays it in the UI.

---

## 🚀 Tech Stack

- React (Vite)
- Axios
- REST API (JSONPlaceholder)
- JavaScript (ES6+)

---

## 📁 Project Folder Structure

```txt
src/
├── api/
│   └── userApi.js        # API layer (axios calls)
│
├── hooks/
│   └── useUsers.js       # Custom hook (business logic)
│
├── components/
│   └── UserList.jsx      # UI-only component
│
├── pages/
│   └── Home.jsx          # Page-level component
│
├── App.jsx
└── main.jsx


🔄 Data Flow Architecture

Home.jsx
 ↓
useUsers.js (custom hook)
 ↓
userApi.js (axios REST call)
 ↓
Backend API
 ↓
State update
 ↓
UserList.jsx renders UI

📸 Output Screenshot

Below is the expected output after successful REST API integration:

📦 API Used

Endpoint:
https://jsonplaceholder.typicode.com/users

Method:
GET

🧠 Key Learning Points

API calls should be separated from UI logic

Custom hooks improve reusability and readability

Components should focus only on rendering

Axios simplifies REST API handling

Proper folder structure improves scalability

🛠️ Installation & Run
npm install
npm install axios
npm run dev


Open in browser:

http://localhost:5173