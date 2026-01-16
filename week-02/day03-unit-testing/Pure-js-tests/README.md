# Pure JavaScript Unit Testing with Vitest

This project demonstrates **unit testing pure JavaScript functions** using Vitest, a modern and fast testing framework with ES module support.

## 🎯 Overview

Pure JS Tests teaches:
- Writing unit tests with Vitest
- Testing pure JavaScript functions
- ES module syntax (import/export)
- Test organization and structure
- Vitest features and advantages

## 🛠 Tech Stack

- **Vitest** - Modern testing framework (v4.0.0+)
- **JavaScript (ES Modules)** - Source code language
- **Vite** - Build tool and dev server
- **Node.js** - Runtime environment
- **React** - UI library (optional for this project)

## 📦 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Run tests (if configured):**
   ```bash
   npm test
   ```

## 📁 Project Structure

```
Pure-js-tests/
├── package.json             # Project configuration
├── vite.config.js          # Vite configuration
├── src/
│   ├── utils/              # Utility functions
│   ├── App.jsx             # React App component
│   ├── main.jsx            # Entry point
│   ├── App.css             # Application styles
│   └── index.css           # Global styles
├── public/                 # Static assets
└── node_modules/           # Dependencies
```

## 📋 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint for code quality
npm run lint

# Run tests (if configured)
npm test
```

## 💼 Project Details

### Tech Setup

This project combines:
- **Vite**: Fast build tool and dev server
- **React**: UI component library
- **ESLint**: Code quality checking
- **ES Modules**: Modern JavaScript module system

### Key Features

✅ **Hot Module Replacement (HMR)**
- Changes reflect instantly during development
- No page refresh needed

✅ **ES Module Support**
- Native ES6 import/export
- Better tree-shaking and bundle optimization

✅ **React Integration**
- Component-based architecture
- JSX support
- React Hooks ready

✅ **Development Tools**
- ESLint for code quality
- Type checking with TypeScript-ready setup
- CSS-in-JS support

## 🚀 Getting Started

### 1. Start the Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```

Generates optimized build in `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

Test the production build locally.

### 4. Check Code Quality
```bash
npm run lint
```

Identifies code quality issues and style inconsistencies.

## 📚 Project Structure Breakdown

### Main Entry Point: `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### App Component: `src/App.jsx`
```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
```

## 🧪 Adding Tests

To add unit tests with Vitest:

### 1. Install Vitest
```bash
npm install -D vitest
```

### 2. Create Test File: `src/utils/math.test.js`
```javascript
import { describe, test, expect } from "vitest";
import { add, subtract } from "./math";

describe("Math Utils", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
```

### 3. Create Utility: `src/utils/math.js`
```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  if (a < b) return 0;
  return a - b;
}
```

### 4. Update package.json
```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### 5. Run Tests
```bash
npm test
```

## 🧠 Best Practices

✅ **Do:**
- Keep utilities separate from UI
- Write pure functions
- Test business logic independently
- Use descriptive test names
- Test edge cases
- Keep functions focused
- Use meaningful variable names

❌ **Don't:**
- Mix business logic with UI
- Test implementation details
- Make untestable code
- Ignore error conditions
- Create large monolithic functions
- Skip tests for utilities

## 🛠️ Vite Configuration

Key settings in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true  // Auto-open in browser
  }
})
```

## 📝 ESLint Configuration

Ensures code quality with `eslint.config.js`:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules
    }
  }
]
```

## 🚀 Development Workflow

1. **Create utilities** in `src/utils/`
2. **Write tests** alongside utilities
3. **Test during development** with `npm test -- --watch`
4. **Check code quality** with `npm run lint`
5. **Build for production** with `npm run build`
6. **Deploy** the `dist/` folder

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Documentation](https://eslint.org/)

