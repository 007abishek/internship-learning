import { useMemo, useState } from "react";

function heavyCalc(num: number) {
  console.log("calculating...");
  return num * 2;
}

export default function UseMemo() {
  const [count, setCount] = useState(1);

  const result = useMemo(() => heavyCalc(count), [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {result}
    </button>
  );
}
