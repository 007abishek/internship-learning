📘 React useState Counter Example

This project is a simple React application that demonstrates how the useState hook works to manage state and trigger UI updates.

🚀 What This Project Does

Displays a number on the screen

Increments the number when the Add button is clicked

Uses React’s useState hook for state management

🧠 Key Concept Covered
useState

Stores component state

Triggers a re-render when state changes

Ensures UI updates automatically

🧩 Code Overview
import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(1);

  const handleAdd = () => {
    setState(x => x + 1);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;

🔁 How It Works

Component renders with initial state value 1

User clicks the Add button

handleAdd updates the state

React re-renders the component

Updated value appears on the UI

🛠️ Technologies Used

React

JavaScript (ES6)

React Hooks (useState)