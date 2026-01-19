import { useTheme } from "../context/ThemeContext";

const Card = () => {
  const { theme } = useTheme();

  return (
    <div className="card">
      <h3>{theme.toUpperCase()} MODE</h3>
      <p>Theme applied using React Context.</p>
    </div>
  );
};

export default Card;
