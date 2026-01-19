import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Card from "./components/Card";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
