import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

export default UncontrolledInput;
