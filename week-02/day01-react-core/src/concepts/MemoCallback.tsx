import { useCallback, useMemo, useState } from "react";

const MemoCallback = () => {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    return count * 1000;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Value: {expensiveValue}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MemoCallback; // 
