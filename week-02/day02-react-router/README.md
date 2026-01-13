# React Router Learning Project

A comprehensive React Router demonstration project covering client-side routing, protected routes, dynamic routes, lazy loading, and error handling.

## 📚 Learning Objectives

This project demonstrates:

- ✅ Understanding the role of React Router in client-side routing
- ✅ Setting up routes and links
- ✅ Using dynamic routes and parameters
- ✅ Protecting routes with authentication
- ✅ Lazy loading routes
- ✅ Error route handling (404)

## 🚀 Features

### 1. **Client-Side Routing**
   - Navigation between pages without full page reloads
   - Browser history management
   - URL-based routing

### 2. **Route Setup**
   - Home page (`/`)
   - Login page (`/login`)
   - Dashboard page (`/dashboard`) - Protected
   - User profile page (`/users/:id`) - Dynamic route
   - 404 Not Found page (`*`) - Catch-all route

### 3. **Protected Routes**
   - Authentication check using session storage
   - Automatic redirect to login if not authenticated
   - Preserves intended destination for post-login redirect

### 4. **Dynamic Routes**
   - URL parameters using `useParams` hook
   - Example: `/users/123` displays user ID 123

### 5. **Lazy Loading**
   - Code splitting for Dashboard component
   - Improved initial load performance
   - Loading fallback UI

### 6. **Error Handling**
   - 404 page for unmatched routes
   - User-friendly error messages

## 🛠️ Tech Stack

- **React** 19.2.0
- **React Router DOM** 7.12.0
- **TypeScript** 5.9.3
- **Vite** 7.2.4

## 📁 Project Structure

```
src/
├── components/
│   └── ProtectedRoute.tsx    # Route protection component
├── pages/
│   ├── Home.tsx               # Home page
│   ├── Login.tsx              # Login page
│   ├── Dashboard.tsx          # Protected dashboard (lazy loaded)
│   ├── User.tsx               # Dynamic user route
│   └── NotFound.tsx           # 404 error page
├── App.tsx                    # Main app component with routes
├── main.tsx                   # App entry point
└── index.css                  # Global styles
```
