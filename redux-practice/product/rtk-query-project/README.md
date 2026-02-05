# Redux Product & Cart Management

This project is a **practice implementation of Redux Toolkit and RTK Query** focused on a **product listing and cart workflow**.  
It demonstrates how to manage **server state (products)** and **client state (cart)** in a scalable React application.

---

## 🎯 Project Objective

- Understand **Redux Toolkit** using real-world use cases
- Learn **RTK Query** for API data fetching
- Implement a complete **Product → Cart workflow**
- Clearly separate **server state** and **client state**

---

## 🧠 Concepts Covered

### Redux Toolkit
- `configureStore`
- `createSlice`
- Reducers and actions
- Global state management
- `useSelector` and `useDispatch`

### RTK Query
- `createApi`
- `fetchBaseQuery`
- Query endpoints
- Auto-generated hooks
- Loading and error handling

---

## 🔁 Product → Cart Workflow
```
Product API (RTK Query)
↓
Product List UI
↓
Add to Cart (dispatch action)
↓
Cart Slice (Redux State)
↓
Cart UI updates automatically
```
