import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import { toggleTheme } from "./features/theme/themeSlice";
import { RootState } from "./app/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Redux Slice Practice</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <hr />

      <h2>Theme: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
