import React, { useState, useMemo, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive calculation (memoized)
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Memoized theme object
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "20px",
      marginTop: "10px",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark((curr) => !curr)}>
        Toggle Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default App;

// Simulating an expensive function
function slowFunction(num) {
  console.log("running slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
