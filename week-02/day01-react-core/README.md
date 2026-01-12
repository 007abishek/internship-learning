# React Core Concepts

A comprehensive learning project covering fundamental React concepts through practical examples. Each concept is demonstrated in a separate component file to help understand core React principles.

## Description

This project is designed to teach essential React concepts through hands-on examples. Each concept file focuses on a specific React topic, making it easy to understand how different parts of React work together to build dynamic user interfaces.

## Project Structure

```
src/
├── concepts/
│   ├── JsxVsHtml.tsx         # JSX syntax and differences from HTML
│   ├── VirtualDom.tsx         # Virtual DOM concept demonstration
│   ├── PropsState.tsx         # Props and State fundamentals
│   ├── LifecycleHooks.tsx     # Component lifecycle with useEffect
│   ├── UseStateEffect.tsx     # useState and useEffect hooks
│   └── MemoCallback.tsx       # Performance optimization with useMemo and useCallback
├── App.tsx                    # Main app component (renders all concepts)
└── index.tsx                  # Application entry point
```

## Concepts Covered

### 1. JSX vs HTML (`JsxVsHtml.tsx`)

**Learning Focus:** Understanding JSX syntax and its differences from HTML

**Key Concepts:**
- JSX syntax (`className` instead of `class`)
- Embedding JavaScript expressions with `{}`
- Self-closing tags
- Dynamic content rendering

**Example Features:**
- Variable interpolation: `{name}`
- Expression evaluation: `{2+3}`
- Proper JSX attribute syntax

---

### 2. Virtual DOM (`VirtualDom.tsx`)

**Learning Focus:** Understanding React's Virtual DOM and efficient updates

**Key Concepts:**
- Virtual DOM abstraction
- State-driven UI updates
- Efficient re-rendering
- React's reconciliation process

**Example Features:**
- Counter with state management
- Button-triggered updates
- How React efficiently updates the DOM

---

### 3. Props and State (`PropsState.tsx`)

**Learning Focus:** Understanding the difference between props and state

**Key Concepts:**
- **Props**: Data passed from parent to child components (immutable)
- **State**: Component's internal data (mutable)
- TypeScript type definitions for props
- Component communication patterns

**Example Features:**
- `Message` component receiving props
- `PropsState` component managing its own state
- Counter increment functionality
- Typed props with TypeScript

---

### 4. Lifecycle Hooks (`LifecycleHooks.tsx`)

**Learning Focus:** Understanding component lifecycle with useEffect

**Key Concepts:**
- Component mounting and unmounting
- `useEffect` hook for side effects
- Cleanup functions
- Empty dependency array `[]`

**Example Features:**
- Mount lifecycle: runs when component mounts
- Unmount lifecycle: cleanup function runs when component unmounts
- Console logging for lifecycle events

---

### 5. useState and useEffect (`UseStateEffect.tsx`)

**Learning Focus:** Combining state management with side effects

**Key Concepts:**
- `useState` for state management
- `useEffect` for side effects
- Dependency arrays
- Effect execution based on state changes

**Example Features:**
- Counter state management
- Effect that runs when count changes
- Console logging on state updates
- Understanding dependency array `[count]`

---

### 6. useMemo and useCallback (`MemoCallback.tsx`)

**Learning Focus:** Performance optimization with memoization hooks

**Key Concepts:**
- `useMemo`: Memoize expensive calculations
- `useCallback`: Memoize function references
- Preventing unnecessary re-renders
- Performance optimization patterns

**Example Features:**
- Memoized expensive calculation
- Callback function memoization
- Function reference stability
- When to use optimization hooks

## Technologies Used

- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 4.9.5** - Typed superset of JavaScript
- **React Hooks** - useState, useEffect, useMemo, useCallback
