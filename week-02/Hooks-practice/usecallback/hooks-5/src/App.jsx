import React, { useState, useCallback } from "react";
import List from "./assets/List";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // dynamic function
  const getItems = useCallback((incrementor) => {
    return [
      number + incrementor + 1,
      number + incrementor + 2,
      number + incrementor + 3,
    ];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((curr) => !curr)}>
        Toggle Theme
      </button>

      <List getItems={getItems} />
    </div>
  );
};

export default App;
