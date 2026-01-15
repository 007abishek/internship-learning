# React useEffect Cleanup & Dependency Example

This project demonstrates how **useEffect** works with a **dependency array** and how the **cleanup function** executes during component updates.

---

## What This Example Shows

- Managing multiple state values using `useState`
- Running `useEffect` when dependencies change
- Executing cleanup logic before re-running an effect
- Understanding re-renders and console log order

---

## Key Concepts

- `useEffect` runs **after the component renders**
- Cleanup runs:
  - Before the effect runs again
  - When the component unmounts
- Dependency array controls when the effect executes
- Updating state inside cleanup can cause unnecessary re-renders

---

## Behavior Overview

1. Component renders with initial state values  
2. `useEffect` runs after render  
3. State update inside `useEffect` triggers re-render  
4. Cleanup runs before the next effect execution  

---

## Technologies Used

- React
- JavaScript (ES6)
- React Hooks (`useState`, `useEffect`)

---

## Learning Outcome

- Clear understanding of `useEffect` lifecycle
- Awareness of proper memory cleanup patterns
- Ability to reason about render and effect execution order

---

