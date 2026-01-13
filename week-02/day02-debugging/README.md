# React Error Handling & Debugging (Vite + TypeScript)

This project demonstrates **error handling and debugging techniques in React** using **Vite + TypeScript**.  
It is built for learning how React applications behave when runtime errors occur and how to handle them gracefully.



## 🚀 Tech Stack

- React
- TypeScript
- Vite
- Browser DevTools
- React Error Boundaries



## 📁 Project Structure

src/
├─ components/
│ ├─ BuggyCounter.tsx
│ ├─ ApiComponent.tsx
│ └─ ErrorBoundary.tsx
├─ pages/
│ └─ Home.tsx
├─ App.tsx
└─ main.tsx



-
## 🎯 What This Project Demonstrates

### 1. Runtime Errors in React
- How incorrect state handling can crash a React app
- Example: calling a method on `null`

### 2. Error Boundaries
- How to prevent the entire app from crashing
- Showing fallback UI when an error occurs
- Catching render-time errors

### 3. Async Error Handling
- Handling API failures using `try/catch` and `.catch()`
- Displaying error messages in the UI
- Understanding why Error Boundaries do NOT catch async errors

### 4. Debugging Techniques
- Using browser console logs
- Inspecting errors in DevTools
- Understanding error stack traces

---

## 🧪 How to Observe Errors

### Step 1: Observe App Crash
1. Remove `ErrorBoundary` from `App.tsx`
2. Reload the app
3. Observe the crash and console error

### Step 2: Add ErrorBoundary
1. Wrap `<Home />` with `<ErrorBoundary />`
2. Reload the app
3. Observe fallback UI instead of full crash

### Step 3: Async Error Handling
1. API call intentionally fails
2. Error message is displayed
3. App continues running

### Step 4: Fix the Bug
1. Initialize state correctly
2. Reload the app
3. Verify no crash occurs