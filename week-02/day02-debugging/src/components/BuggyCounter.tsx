import { useState } from "react";

const BuggyCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  return (
    <div>
      <h3>Buggy Counter</h3>
      {/* ❌ Runtime error */}
      <p>Count: {count!.toFixed(2)}</p>
      <button onClick={() => setCount(5)}>Fix Value</button>
    </div>
  );
};

export default BuggyCounter;
