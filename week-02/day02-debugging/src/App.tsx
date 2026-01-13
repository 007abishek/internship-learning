import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Error Handling & Debugging</h1>

      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
