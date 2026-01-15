# React REST API Integration (User List)

This project demonstrates **how to integrate React with a REST API** using a **scalable and industry-standard folder structure**. It fetches user data from a public REST API (JSONPlaceholder) and displays it in the UI with proper separation of concerns.

## 🚀 Overview

This learning project teaches best practices for API integration in React, including:
- Separating API calls into a dedicated layer
- Creating custom hooks for business logic
- Proper state management with loading/error handling
- Clean component architecture for UI rendering
- Following industry-standard folder structure

## 🛠 Tech Stack

- **React** - UI library with Hooks
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **REST API** - JSONPlaceholder (mock API)
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS** - Styling

## 📁 Project Structure

```
src/
├── api/
│   └── userApi.js           # API layer (axios calls)
├── hooks/
│   └── useUsers.js          # Custom hook (business logic)
├── components/
│   └── UserList.jsx         # Presentational component (UI only)
├── pages/
│   └── Home.jsx             # Page-level component
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
├── App.css                  # Application styles
└── index.css                # Global styles
```

## 🏗️ Architecture & Data Flow

### Separation of Concerns

```
Home.jsx (Page Component)
   ↓ Uses
useUsers.js (Custom Hook - Business Logic)
   ↓ Calls
userApi.js (API Layer - HTTP Requests)
   ↓ Fetches from
JSONPlaceholder REST API
   ↓ Returns Data
State Management (loading, users)
   ↓ Passes to
UserList.jsx (Presentational Component - UI Only)
   ↓
Renders User Interface
```

## 📋 Component Breakdown

### API Layer (`src/api/userApi.js`)
- **Purpose**: Encapsulates all HTTP requests
- **Benefits**: Reusable, maintainable, testable
- **Exports**: `fetchUsers()` function
- **Technology**: Axios for HTTP calls
- **Base URL**: `https://jsonplaceholder.typicode.com`

```javascript
export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};
```

### Custom Hook (`src/hooks/useUsers.js`)
- **Purpose**: Contains business logic for fetching and managing user data
- **Benefits**: Logic reusability across components
- **Returns**: Object with `users` state and `loading` state
- **Lifecycle**: Runs effect on component mount (empty dependency array)
- **Error Handling**: Catches and logs API errors

```javascript
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // ... fetch logic
  return { users, loading };
};
```

### Page Component (`src/pages/Home.jsx`)
- **Purpose**: Container/smart component that orchestrates data flow
- **Responsibilities**: 
  - Uses custom hook to get data
  - Passes data to presentational components
  - Manages page layout
- **No UI logic**: Only handles data and component composition

### Presentational Component (`src/components/UserList.jsx`)
- **Purpose**: Pure UI rendering component
- **Responsibilities**: 
  - Receives data as props
  - Renders loading state
  - Displays user list
- **No side effects**: Only displays what it receives

### Main App (`src/App.jsx`)
- Entry point for the React application
- Renders the Home page component

## ⚙️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install required packages:**
   ```bash
   npm install axios
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Available Commands

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🔗 REST API Used

**JSONPlaceholder** - A free fake JSON API for testing purposes

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoint**: `/users`
- **Method**: GET
- **Response**: Array of user objects with id, name, email, etc.
- **Documentation**: https://jsonplaceholder.typicode.com

### Sample User Object
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

## 🔄 Complete Data Flow

```
1. Component Mounts
   ↓
2. useUsers Hook Triggered
   ↓
3. setLoading(true) - Show loading state
   ↓
4. fetchUsers() called (API layer)
   ↓
5. Axios makes GET request to JSONPlaceholder
   ↓
6. Response received (array of users)
   ↓
7. setUsers(response.data) - Update state
   ↓
8. setLoading(false) - Hide loading state
   ↓
9. Component re-renders with new data
   ↓
10. UserList displays users
```

## 💡 Key Concepts

### 1. API Layer Abstraction
- Separates API calls from business logic
- Makes API endpoints easy to change
- Enables testing without real API calls
- Improves code organization and reusability

### 2. Custom Hooks
- Extract stateful logic from components
- Reusable across multiple components
- Cleaner component code
- Better separation of concerns

### 3. Loading States
- Show feedback to user during data fetching
- Improve user experience
- Prevent rendering errors from missing data

### 4. Error Handling
- Catch and log API errors
- Prevent app crashes
- Can be extended to show error messages to users

### 5. Presentational vs Container Components
- **Container**: Manages data and logic (Home.jsx)
- **Presentational**: Only renders UI (UserList.jsx)
- Easier to test and maintain

## 🧠 Best Practices Demonstrated

✅ **Do:**
- Keep API calls in a dedicated layer
- Use custom hooks for reusable logic
- Separate presentational and container components
- Handle loading and error states
- Use environment variables for API URLs
- Log API responses for debugging
- Follow consistent folder structure
- Use axios for HTTP requests

❌ **Don't:**
- Make API calls directly in components
- Mix API logic with UI rendering
- Ignore loading states
- Create new functions on every render
- Hardcode API URLs in components
- Forget to handle errors
- Make API calls in render method

## 🔍 Debugging Tips

1. **Console Logs**: Check browser console for API responses
2. **Network Tab**: Use DevTools to inspect HTTP requests
3. **React DevTools**: Inspect component state and props
4. **Axios Interceptors**: Can be added for logging requests/responses

## 📚 Related Concepts

- **Axios vs Fetch**: Axios has better error handling and request cancellation
- **useEffect Cleanup**: Can prevent memory leaks with API subscriptions
- **Error Boundaries**: Can wrap components to catch rendering errors
- **React Query/SWR**: Advanced libraries for data fetching and caching
- **Async/Await**: Alternative to .then() for promise handling

## 🎓 Learning Objectives

By completing this project, you'll understand:

- How to structure React applications for scalability
- Integrating REST APIs in React applications
- Creating custom React hooks
- Separating concerns in React applications
- Managing async data fetching
- Handling loading and error states
- Using axios for HTTP requests
- Best practices for API integration
- Industry-standard folder structure
- Presentational vs container component pattern

## 📖 Resources

- [JSONPlaceholder API Documentation](https://jsonplaceholder.typicode.com)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [React Best Practices](https://react.dev/learn)
- [REST API Concepts](https://restfulapi.net/)
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

## 🚀 Next Steps

To extend this project:

1. Add error handling UI for failed requests
2. Implement pagination for large datasets
3. Add search/filter functionality
4. Implement data caching
5. Add sorting capabilities
6. Create post/put/delete endpoints
7. Use React Query for advanced data management
8. Add unit tests for API layer and hooks
9. Implement loading skeletons
10. Add request cancellation on component unmount📸 Output Screenshot

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