import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {count}
    </button>
  );
}
