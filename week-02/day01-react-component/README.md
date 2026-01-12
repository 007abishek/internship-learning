# React Components and Props

A comprehensive learning project demonstrating React component patterns, props, state management, and the difference between functional and class-based components.

## Description

This project showcases fundamental React concepts through practical examples. It demonstrates different component types, prop passing, state management with hooks, and TypeScript integration. The project is organized with components separated by type (functional, class-based, and stateful components) to clearly illustrate React's component architecture.

## Project Structure

```
src/
├── components/
│   ├── functional/
│   │   ├── Header.tsx          # Simple functional component (no props)
│   │   ├── UserCard.tsx        # Functional component with props
│   │   └── Status.tsx          # Functional component with conditional rendering
│   ├── state/
│   │   └── Counter.tsx         # Stateful component with useState hook
│   └── classbased/
│       └── LegacyHeader.tsx    # Class-based component (legacy pattern)
├── App.tsx                     # Main app component (renders all components)
└── index.tsx                   # Application entry point
```

## Components Overview

### 1. Header Component (`functional/Header.tsx`)

**Type:** Functional Component (No Props)

**Learning Focus:** Basic functional component structure

**Key Concepts:**
- Simple functional component syntax
- Components without props
- Arrow function component pattern

**Features:**
- Displays a static header title
- Demonstrates the simplest form of React component

---

### 2. UserCard Component (`functional/UserCard.tsx`)

**Type:** Functional Component with Props

**Learning Focus:** Props and TypeScript type definitions

**Key Concepts:**
- Passing data via props
- TypeScript prop types (`UserCardProps`)
- Destructuring props in function parameters
- Reusable component pattern

**Features:**
- Accepts `name` and `role` as props
- Type-safe prop definitions
- Dynamic content rendering

---

### 3. Status Component (`functional/Status.tsx`)

**Type:** Functional Component with Conditional Rendering

**Learning Focus:** Conditional rendering and boolean props

**Key Concepts:**
- Boolean props
- Ternary operator for conditional rendering
- Dynamic text based on prop values

**Features:**
- Accepts `isOnline` boolean prop
- Displays "Online !!" or "Offline" based on status
- Demonstrates conditional JSX rendering

---

### 4. Counter Component (`state/Counter.tsx`)

**Type:** Stateful Functional Component

**Learning Focus:** State management with useState hook

**Key Concepts:**
- `useState` hook for state management
- Event handling (`onClick`)
- State updates and re-rendering
- Interactive components

**Features:**
- Counter state management
- Button to increment count
- Demonstrates state-driven UI updates

---

### 5. LegacyHeader Component (`classbased/LegacyHeader.tsx`)

**Type:** Class-Based Component

**Learning Focus:** Understanding legacy React component syntax

**Key Concepts:**
- Class component syntax (legacy pattern)
- `extends React.Component`
- `render()` method
- Comparison with functional components

**Features:**
- Classic React component pattern
- Demonstrates how components were written before hooks
- Shows modern React uses functional components

---

## Technologies Used

- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 4.9.5** - Typed superset of JavaScript
- **React Hooks** - useState for state management
- **Create React App** - Development environment

## Key Concepts Demonstrated

### Component Types
- **Functional Components**: Modern React pattern using arrow functions
- **Class Components**: Legacy pattern using ES6 classes (for comparison)
- **Stateful Components**: Components that manage internal state
- **Stateless Components**: Components that only receive props

### Props
- **Type-Safe Props**: Using TypeScript interfaces/types for prop definitions
- **Prop Destructuring**: Extracting props in function parameters
- **Prop Types**: String, boolean, and object props
- **Default Props**: Understanding prop requirements

### State Management
- **useState Hook**: Managing component-level state
- **State Updates**: How state changes trigger re-renders
- **Event Handlers**: Connecting user interactions to state updates

### TypeScript Integration
- **Type Definitions**: Creating interfaces for component props
- **Type Safety**: Compile-time error checking
- **Type Annotations**: Explicit typing for better code quality
