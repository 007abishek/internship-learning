# React Basics - TypeScript Application

A simple React application built with TypeScript to practice fundamental React concepts including component-based architecture, props, and TypeScript type definitions.

## Description

This project demonstrates the core principles of React development with TypeScript. It showcases a component-based architecture where the application is broken down into reusable, independent components (Header, Card, and Footer). Each component demonstrates different patterns for defining React components with TypeScript, including functional components with typed props.

## Technologies Used

- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 4.9.5** - Typed superset of JavaScript
- **React Scripts 5.0.1** - Build tooling for React applications
- **Create React App** - Bootstrapped development environment

## Project Structure

```
src/
├── components/
│   ├── Header.tsx    # Header component with title prop
│   ├── Card.tsx      # Card component with name and description props
│   └── Footer.tsx    # Footer component (no props)
├── App.tsx           # Main application component
├── index.tsx         # Application entry point
└── App.css           # Application styles
```

## Components Overview

### Header Component
- Accepts a `title` prop of type `string`
- Displays the title as an `<h1>` element
- Demonstrates typed props with TypeScript interfaces

### Card Component
- Accepts `name` and `description` props (both strings)
- Renders a card with a border, padding, and margin
- Shows how to use inline styles in React
- Demonstrates component reusability (used multiple times in App)

### Footer Component
- A simple functional component with no props
- Uses `React.FC` type annotation
- Displays copyright information

### App Component
- Main application component that composes all child components
- Demonstrates component composition
- Uses `React.FC` type annotation

## Key Concepts Demonstrated

- **Component-Based Architecture**: Breaking UI into reusable components
- **TypeScript with React**: Type-safe component props and function components
- **Props**: Passing data from parent to child components
- **Functional Components**: Modern React component pattern
- **Component Composition**: Combining multiple components to build a complete UI

