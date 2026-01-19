# Render Props Demo

A React application demonstrating the **Render Props** pattern - a powerful technique for sharing code and state logic between React components.

## What is Render Props?

Render Props is an advanced pattern where a component accepts a function as a prop that returns React elements. This allows for flexible code reuse and state sharing without using higher-order components (HOCs).

## Project Overview

This project demonstrates how to:
- Use render props for component composition
- Share stateful logic between components
- Create flexible, reusable counter components
- Apply the render props pattern with different UI implementations

## Tech Stack

- **React**: 19.2.0
- **Vite**: Build tool and dev server
- **ESLint**: Code quality and consistency

## Project Structure

```
src/
├── components/
│   ├── Counter.jsx          # Main counter component with render prop
│   ├── ClickCounter.jsx     # Click-based counter using render props
│   └── HoverCounter.jsx     # Hover-based counter using render props
├── assets/
├── App.jsx                  # Main application component
├── App.css
├── index.css
└── main.jsx
```

## Key Components

### Counter Component
The base component that manages the count state and provides it via render props:
```jsx
<Counter
  render={(count, increment) => (
    <button onClick={increment}>
      Clicked {count} times
    </button>
  )}
/>
```

### ClickCounter
Uses the Counter component to create a click-based counter interface.

### HoverCounter
Uses the Counter component to create a hover-based counter interface.

## Installation

```bash
npm install
```

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build for Production
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality.

## How It Works

1. **Counter Component** holds the state and logic
2. **Render Prop** is a function that receives `(count, increment)` as arguments
3. The function returns the JSX to be rendered
4. Different components can use the same Counter with different render implementations

## Key Concepts

- **State Management**: Counter manages state internally
- **Code Reuse**: Multiple components use the same Counter logic
- **Flexibility**: Each component renders differently based on its render prop
- **Separation of Concerns**: Logic is separated from presentation



## Resources

- [React Documentation - Render Props](https://legacy.reactjs.org/docs/render-props.html)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## License

ISC
