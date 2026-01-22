import { useNavigate } from "react-router-dom";
import "../styles/feature-card.css";

type FeatureCardProps = {
  title: string;
  description: string;
  route: string;
  icon: string;
  accent?: "blue" | "purple" | "dark";
};

const FeatureCard = ({
  title,
  description,
  route,
  icon,
  accent = "blue",
}: FeatureCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`feature-card ${accent}`}
      onClick={() => navigate(route)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(route);
      }}
    >
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="feature-footer">
        <span className="hint">Click to navigate</span>
        <span className="open-btn">Open →</span>
      </div>
    </div>
  );
};

export default FeatureCard;
