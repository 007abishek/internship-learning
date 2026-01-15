import React from "react";

const Counter = ({ count, onIncrement }) => {
  console.log("Counter component rendered");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
