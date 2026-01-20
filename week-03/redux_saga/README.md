# 🛒 Redux-Saga Cart Application

This project is a simple **Cart Application** built using **React, Redux, and Redux-Saga**.  
It demonstrates how to manage **global state**, handle **asynchronous logic**, and apply **advanced Redux-Saga effects** in a real-world scenario.

---

## 🚀 Features

- Add items to cart
- Remove items from cart
- Prevent duplicate items
- Handle async behavior using Redux-Saga
- Handle edge cases like rapid clicks and timeouts
- Clean separation of UI, state, and business logic

---

## 🧠 Tech Stack

- React
- Redux
- Redux-Saga
- React-Redux

---
...
## 📁 Folder Structure

src
├── store
│   ├── index.js
│   ├── rootReducer.js
│   └── rootSaga.js
├── features
│   └── cart
│       ├── reducer.js
│       ├── saga.js
│       └── tests
│           ├── saga.test.js
│           └── watcher.test.js
├── components
│   ├── ProductList.jsx
│   └── Cart.jsx
├── App.jsx
└── index.js



## 🔄 Application Flow

User Action (Add / Remove)
↓
Redux Action Dispatched
↓
Redux-Saga handles logic
↓
Reducer updates store
↓
UI re-renders


---

## 🧩 Redux-Saga Concepts Used

### ✅ `takeEvery`
- Listens for every `REMOVE_FROM_CART` action.
- Ensures all remove actions are processed.

### ✅ `throttle`
- Limits `ADD_TO_CART` actions to one per second.
- Prevents rapid clicks and duplicate async calls.

### ✅ `select`
- Reads current cart state inside the saga.
- Used to prevent adding duplicate items.

### ✅ `put`
- Dispatches success and error actions to Redux.
- Acts like `dispatch()` inside sagas.

### ✅ `race`
- Handles timeout scenarios.
- Competes between API simulation and timeout delay.

### ✅ `take`, `fork`, `cancel`
- Used for manual control over saga execution.
- Cancels outdated add-to-cart tasks when new ones arrive.

---

## 🐞 Bug Fixed

**Issue:**  
After removing an item, adding it again still showed  
“Item already exists in cart”.

**Fix:**  
- Properly cleared the `error` state in the reducer on successful add and remove actions.
- Ensured the saga always checks the latest Redux state using `select`.

---

## 🧪 Testing

- Worker sagas tested using **generator testing**
- Watcher sagas tested using **`testSaga`**
- Learned common pitfalls:
  - Watcher sagas never complete
  - `.done()` should not be used for watcher tests
  - Named exports are required for testing sagas



---

## ▶️ How to Run

```bash
npm install
npm start

npm test
