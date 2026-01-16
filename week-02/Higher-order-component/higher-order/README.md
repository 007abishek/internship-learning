# Higher Order Component (HOC)

A React + Vite project demonstrating the Higher Order Component pattern in React. This project shows how to use HOCs to enhance component functionality with additional features like click tracking.

## Project Overview

This project demonstrates:
- **Higher Order Components (HOC)** - A pattern for code reuse and logic abstraction
- **Component Enhancement** - Wrapping components to add functionality
- **React Best Practices** - Proper component composition patterns
- Built with **React** (v19.2.0) and **Vite** (v7.2.4)

## What is a Higher Order Component?

A Higher Order Component is an advanced pattern in React that takes a component and returns an enhanced version of that component. It's a way to share stateful logic or behavior between components without using inheritance.

**Pattern:**
```javascript
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

## Project Structure

```
higher-order/
├── src/
│   ├── Button.jsx              # Base button component
│   ├── withClickTracking.jsx    # HOC for tracking clicks
│   ├── App.jsx                  # Main application
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/                      # Static assets
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Components

### Button Component
A simple button component that accepts:
- `label` (string) - Button text
- `onClick` (function) - Click handler

```jsx
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### withClickTracking HOC
A Higher Order Component that wraps a component and adds click tracking functionality.

**Features:**
- Tracks click events
- Logs click information with tracking data
- Passes props through to wrapped component
- Transparent to the original component

```jsx
const withClickTracking = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const handleClick = () => {
      console.log("Click Tracked:", props.trackingInfo);
    };
    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};
```

## Usage Example

```jsx
import Button from "./Button";
import withClickTracking from "./withClickTracking";

const App = () => {
  const ButtonWithTracking = withClickTracking(Button);

  return (
    <div>
      <ButtonWithTracking
        label="Pay Now"
        trackingInfo={{ amount: "2000", user: "Jack" }}
      />
    </div>
  );
};
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd higher-order
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
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

## HOC Benefits

- **Code Reuse** - Share logic across multiple components
- **Props Abstraction** - Hide implementation details
- **State Logic** - Extract stateful logic from components
- **Props Manipulation** - Modify or enhance props before passing to wrapped component
- **Render Hijacking** - Control what gets rendered
- **Static Methods** - Enhance component with utility methods

## Common HOC Patterns

1. **Props Proxy** - Intercept and modify props
2. **Inheritance Inversion** - Invert the inheritance hierarchy
3. **Component State Abstraction** - Extract state into HOC
4. **Event Handling** - Add event listeners and handlers
5. **Conditional Rendering** - Render conditionally based on conditions

## Dependencies

- **react** (v19.2.0)
- **react-dom** (v19.2.0)
- **vite** (v7.2.4)
- **eslint** (v9.39.1)

## Learning Outcomes

- Understanding Higher Order Components pattern
- Component composition and reusability
- Props drilling and manipulation
- Creating reusable component enhancers
- Advanced React patterns
- Tracking and logging with HOCs
