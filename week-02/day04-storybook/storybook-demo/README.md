# Storybook Demo

A React + Vite project showcasing component development and documentation using Storybook. This project demonstrates building and cataloging reusable UI components with interactive stories.

## Project Overview

This is a component library demo built with:
- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool and dev server
- **Storybook** (v10.1.11) - Component documentation and testing platform
- **ESLint** - Code quality and linting

## Project Structure

```
storybook-demo/
├── src/
│   ├── components/          # React components
│   │   ├── Avatar.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   ├── stories/             # Storybook story files
│   │   ├── Avatar.stories.jsx
│   │   ├── Badge.stories.jsx
│   │   ├── Button.stories.jsx
│   │   ├── Card.stories.jsx
│   │   └── Input.stories.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .storybook/              # Storybook configuration
├── public/                  # Static assets
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd storybook-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Server
Start the Vite development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Storybook
Launch Storybook to view component stories and documentation:
```bash
npm run storybook
```
Storybook will open at `http://localhost:6006`

### Build for Production
```bash
npm run build
```

### Build Storybook
Create a static build of Storybook:
```bash
npm run build-storybook
```

### Preview Production Build
```bash
npm run preview
```

### Linting
Check code quality:
```bash
npm run lint
```

## Components

### Avatar
Displays user profile images with customizable styling.

### Badge
A small component for displaying labels or status indicators.

### Button
Primary interactive button component with disabled state support.

### Card
Container component for grouping content together.

### Input
Text input field component for form interactions.

## Storybook Features

- **Interactive Component Stories**: View and interact with components in isolation
- **Variant Exploration**: Test different component states and props
- **Documentation**: Built-in documentation for each component
- **Live Editing**: Modify props in real-time to see changes
- **Responsive Testing**: Test components at different screen sizes

## Dependencies

### Core Dependencies
- **react** (v19.2.0)
- **react-dom** (v19.2.0)

### Dev Dependencies
- **@storybook/react-vite** (v10.1.11)
- **vite** (v7.2.4)
- **eslint** (v9.39.1)
- **playwright** (v1.57.0)
- **prop-types** (v15.8.1)

