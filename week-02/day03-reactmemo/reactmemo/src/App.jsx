import React, { useState, useCallback } from "react";
import Counter from "./components/Counter";
import User from "./components/User";

const App = () => {
  const [count, setCount] = useState(0);
  const [name] = useState("Abhishek");

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  console.log("App component rendered");

  return (
    <div>
      <Counter count={count} onIncrement={increment} />
      <User name={name} />
    </div>
  );
};

export default App;
