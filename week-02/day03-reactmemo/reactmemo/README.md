# React.memo - Performance Optimization

A learning project demonstrating React's `React.memo` API for preventing unnecessary re-renders in functional components.

## Overview

This project explores **memoization** in React, a key performance optimization technique. It shows how `React.memo` prevents a component from re-rendering if its props haven't changed, helping improve application performance by avoiding redundant renders.

## What is React.memo?

`React.memo` is a higher-order component (HOC) that memoizes a functional component. It performs a shallow comparison of props, and only re-renders the component if props actually change.

**Syntax:**
```javascript
const MemoizedComponent = React.memo(Component);
```

## Project Structure

```
src/
├── App.jsx           # Main component with state management
├── components/
│   ├── Counter.jsx   # Component that re-renders on prop change
│   └── User.jsx      # Component wrapped with React.memo
├── main.jsx
└── App.css
```

## Components

### App.jsx
- Manages state for `count` and `name`
- Uses `useCallback` to memoize the increment function
- Renders both Counter and User components

### Counter.jsx
- **Not memoized** - Re-renders whenever App re-renders
- Displays the count value and an increment button
- Logs "Counter component rendered" on every render

### User.jsx
- **Memoized with `React.memo`** - Only re-renders if `name` prop changes
- Displays user name
- Logs "User component rendered" when props actually change
- Wrapped with `React.memo(User)` to optimize performance

## Key Concepts

### 1. Unnecessary Re-renders
Without `React.memo`, when the parent component (App) re-renders, all child components also re-render, even if their props haven't changed.

### 2. Shallow Comparison
`React.memo` performs a **shallow comparison** of all props. If any prop changes (by reference), the component re-renders.

### 3. useCallback Hook
Used in the App component to memoize the `increment` function, ensuring the function reference doesn't change on every render.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the browser and check the console to observe render logs

## Available Commands

```bash
# Install dependencies
npm install

# Start development server with HMR (Hot Module Replacement)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## Observations

- **Counter logs** every time the App re-renders (not memoized)
- **User logs** only when its props actually change (memoized)
- Click the increment button and observe the difference in console logs

## When to Use React.memo

✅ **Use React.memo when:**
- Component receives props that rarely change
- Component is expensive to render
- Parent renders frequently

❌ **Avoid React.memo when:**
- Props change frequently
- Component is simple/lightweight
- Props aren't stable (new objects/functions created each render)

## Custom Comparison

For complex comparisons, provide a custom comparison function:
```javascript
const MemoizedComponent = React.memo(
  Component,
  (prevProps, nextProps) => {
    // Return true if props are equal (skip render)
    // Return false if props differ (render)
    return prevProps.id === nextProps.id;
  }
);
```

## Related Concepts

- `useMemo` - Memoize expensive calculations
- `useCallback` - Memoize function references
- `React.PureComponent` - Class component memoization (older approach)
