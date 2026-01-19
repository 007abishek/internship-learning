import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Render Props Demo</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default App;
