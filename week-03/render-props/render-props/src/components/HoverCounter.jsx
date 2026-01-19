import Counter from "./Counter";

const HoverCounter = () => {
  return (
    <Counter
      render={(count, increment) => (
        <h2 onMouseOver={increment}>
          Hovered {count} times
        </h2>
      )}
    />
  );
};

export default HoverCounter;
