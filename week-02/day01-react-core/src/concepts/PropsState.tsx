import { useState } from "react";

type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <p>{text}</p>;
};

const PropsState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Message text="Props example" />
      <p>State count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default PropsState;
