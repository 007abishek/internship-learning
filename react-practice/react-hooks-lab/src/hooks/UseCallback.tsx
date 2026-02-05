import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={increment}>{count}</button>;
}
