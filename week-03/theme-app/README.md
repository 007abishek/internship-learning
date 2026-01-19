# Theme App

A React application demonstrating **React Context API** for global theme management, allowing users to switch between light and dark themes across the entire application.

## Project Overview

This project demonstrates how to:
- Use React Context API for state management
- Implement theme switching functionality
- Create a theme provider and consumer pattern
- Apply themes globally across components
- Manage theme persistence

## Tech Stack

- **React**: 19.2.0
- **Vite**: Build tool and dev server
- **Context API**: Global state management
- **ESLint**: Code quality and consistency

## Project Structure

```
src/
├── components/
│   ├── navbar/              # Navigation component with theme toggle
│   └── Card.jsx             # Display component affected by theme
├── context/
│   └── ThemeContext.jsx     # Theme context and provider
├── assets/
├── App.jsx                  # Main application component
├── App.css
├── index.css
└── main.jsx
```

## Key Components

### ThemeContext
Global context that manages the theme state and provides theme switching functionality:
```jsx
const { theme, toggleTheme } = useTheme();
```

### Navbar
Navigation component with a theme toggle button that allows users to switch between light and dark themes.

### Card
Display component that responds to theme changes from the context.

### App
Main component that wraps everything with the theme context provider.

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

1. **ThemeContext** stores the current theme state (light/dark)
2. **ThemeProvider** wraps the application and provides theme context
3. **useTheme Hook** allows any component to access and modify the theme
4. Components read the theme from context and apply CSS classes accordingly
5. Theme toggle updates the context, triggering re-renders in all listening components

## Features

- **Light/Dark Theme Toggle**: Switch between themes with a button
- **Context-based State**: Global theme state without prop drilling
- **Responsive Design**: Theme applies to all components
- **CSS Theme Classes**: Dynamic CSS classes based on theme
- **Custom Hook**: Easy access to theme via `useTheme()` hook

## Theme Implementation

Components access theme like this:
```jsx
import { useTheme } from "./context/ThemeContext";

function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <div className={`container ${theme}`}>
      {/* Content */}
    </div>
  );
}
```

## Learning Outcomes

After completing this project, you'll understand:
- How to set up and use React Context API
- Creating custom hooks for context consumption
- Global state management without external libraries
- Theme switching and CSS-based theming
- Avoiding prop drilling with Context API

## Best Practices Demonstrated

- **Separation of Concerns**: Theme logic in separate context file
- **Custom Hooks**: Encapsulate context logic in `useTheme()` hook
- **Provider Pattern**: Wrap app with theme provider
- **CSS Classes**: Dynamic theming with CSS classes

## Enhancements (Optional)

- Save theme preference to localStorage
- Add more theme options (auto/system theme detection)
- Smooth transition animations between themes
- Theme customization options

## Resources

- [React Context API Documentation](https://react.dev/reference/react/useContext)
- [React Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## License

ISC
