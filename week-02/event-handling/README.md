# React Event Handling

A comprehensive learning project demonstrating event handling in React, including synthetic events, event handlers, event propagation (bubbling and capturing), and preventing default browser behavior.

## Description

This project focuses on understanding how React handles user interactions through events. It demonstrates various event handling patterns, React's SyntheticEvent system, and common event handling techniques used in modern React applications. Each concept is implemented in a separate component to provide clear, focused examples.

## Project Structure

```
src/
├── event/
│   ├── EventHandlers.tsx          # Basic event handler patterns
│   ├── SyntheticEventDemo.tsx     # React's SyntheticEvent system
│   ├── BubblingCapturing.tsx      # Event propagation (bubbling)
│   └── PreventDefaultDemo.tsx     # Preventing default browser behavior
├── App.tsx                         # Main app component (renders all demos)
└── index.tsx                       # Application entry point
```

## Components Overview

### 1. Event Handlers (`EventHandlers.tsx`)

**Learning Focus:** Basic event handler implementation

**Key Concepts:**
- Defining event handler functions
- Connecting handlers to JSX elements
- Using `onClick` event
- State updates triggered by events

**Features:**
- Counter component with increment button
- Event handler function (`handleIncrement`)
- State management with `useState`
- Demonstrates the basic pattern: user action → event → handler → state update

**Code Pattern:**
```tsx
const handleIncrement = () => {
  setCount(count + 1);
};
<button onClick={handleIncrement}>Increment</button>
```

---

### 2. Synthetic Event (`SyntheticEventDemo.tsx`)

**Learning Focus:** Understanding React's SyntheticEvent system

**Key Concepts:**
- React's SyntheticEvent wrapper
- Event object properties (`type`, `target`)
- TypeScript typing for events
- Cross-browser compatibility

**Features:**
- Button click handler with event parameter
- TypeScript event typing: `React.MouseEvent<HTMLButtonElement>`
- Accessing event properties (type, target)
- Console logging for event inspection

**Key Insight:**
React wraps native browser events in a SyntheticEvent object, providing a consistent API across browsers and better performance.

---

### 3. Event Bubbling and Capturing (`BubblingCapturing.tsx`)

**Learning Focus:** Understanding event propagation in React

**Key Concepts:**
- Event bubbling (default behavior)
- Parent-child event propagation
- Event flow through DOM hierarchy
- Understanding event target vs current target

**Features:**
- Nested elements (parent div, child button)
- Event handlers on both parent and child
- Console logging to observe propagation
- Visual styling to distinguish parent/child

**Behavior:**
When clicking the child button, both child and parent event handlers fire due to bubbling. Events bubble up from the target element to the root.

---

### 4. Prevent Default (`PreventDefaultDemo.tsx`)

**Learning Focus:** Controlling default browser behavior

**Key Concepts:**
- `preventDefault()` method
- Form submission handling
- Preventing page reload on form submit
- `React.FormEvent` type

**Features:**
- Form with submit handler
- Preventing default form submission behavior
- Alert dialog instead of page reload
- Demonstrates controlling browser defaults

**Use Case:**
Essential for forms, links, and other elements where you want to handle the action in JavaScript instead of the browser's default behavior.

---

## Technologies Used

- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 4.9.5** - Typed superset of JavaScript
- **React Hooks** - useState for state management
- **Create React App** - Development environment

## Key Concepts Demonstrated

### Event Handling Patterns

1. **Inline Handlers** (not shown but possible):
   ```tsx
   <button onClick={() => console.log('clicked')}>Click</button>
   ```

2. **Handler Functions** (recommended):
   ```tsx
   const handleClick = () => { /* logic */ };
   <button onClick={handleClick}>Click</button>
   ```

3. **Handler with Event Parameter**:
   ```tsx
   const handleClick = (e: React.MouseEvent) => { /* use e */ };
   <button onClick={handleClick}>Click</button>
   ```

### React SyntheticEvent

- **Wrapper**: React wraps native events in SyntheticEvent
- **Consistency**: Same API across all browsers
- **Performance**: Events are pooled for better performance
- **Properties**: Access to `type`, `target`, `currentTarget`, `preventDefault()`, `stopPropagation()`, etc.

### Event Propagation

- **Bubbling**: Events bubble up from target to root (default)
- **Capturing**: Events capture down from root to target (not demonstrated here)
- **stopPropagation()**: Can prevent further propagation if needed

### Common Event Types

- `onClick` - Mouse clicks
- `onChange` - Input changes
- `onSubmit` - Form submissions
- `onFocus` / `onBlur` - Focus events
- `onKeyDown` / `onKeyUp` - Keyboard events

## Event Handler Best Practices

1. **Name handlers with "handle" prefix**: `handleClick`, `handleSubmit`
2. **Define handlers as separate functions**: Better readability and debugging
3. **Use TypeScript types**: `React.MouseEvent`, `React.FormEvent`, etc.
4. **Avoid inline functions in render**: Can cause unnecessary re-renders (though modern React optimizes this)
5. **Prevent defaults when needed**: Use `preventDefault()` for forms, links
6. **Stop propagation when necessary**: Use `stopPropagation()` to prevent bubbling

## Learning Objectives

This project helps to understand:

1. **Event Handling Basics**: How to respond to user interactions
2. **Event Handler Patterns**: Different ways to define and use handlers
3. **SyntheticEvent System**: React's event abstraction layer
4. **Event Propagation**: How events flow through the component tree
5. **Default Behavior Control**: Preventing browser defaults when needed
6. **TypeScript with Events**: Typing event handlers correctly
7. **State Updates from Events**: Connecting user actions to state changes

## Key Takeaways

- React uses **SyntheticEvent** to wrap native browser events
- Event handlers are passed as **props** (e.g., `onClick={handler}`)
- Events **bubble up** by default (child → parent)
- Use `preventDefault()` to stop default browser behavior
- Use `stopPropagation()` to stop event bubbling (not shown but available)
- TypeScript provides types for events: `React.MouseEvent`, `React.FormEvent`, etc.
- Event handlers should be defined as functions, not called immediately
- Events are the primary way users interact with React applications

## Common Event Handler Patterns

### Pattern 1: Simple Handler
```tsx
const handleClick = () => {
  // Handle click
};
<button onClick={handleClick}>Click</button>
```

### Pattern 2: Handler with Event
```tsx
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  // Handle click
};
<button onClick={handleClick}>Click</button>
```

### Pattern 3: Handler with Parameters
```tsx
const handleClick = (id: number) => {
  // Handle click with id
};
<button onClick={() => handleClick(123)}>Click</button>
```

## Learn More

- [React Events Documentation](https://react.dev/learn/responding-to-events)
- [SyntheticEvent Reference](https://react.dev/reference/react-dom/components/common#react-event-object)
- [Event Handling Guide](https://react.dev/learn/responding-to-events)
- [TypeScript React Events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events)

