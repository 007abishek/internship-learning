import { memo, useState } from "react";

const Child = memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <p>{value}</p>;
});

export default function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child value={count} />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
