import Counter from "./Counter";

const ClickCounter = () => {
  return (
    <Counter
      render={(count, increment) => (
        <button onClick={increment}>
          Clicked {count} times
        </button>
      )}
    />
  );
};

export default ClickCounter;
