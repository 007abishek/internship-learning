import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("running");
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("cleanup");
    };
  }, []);

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
