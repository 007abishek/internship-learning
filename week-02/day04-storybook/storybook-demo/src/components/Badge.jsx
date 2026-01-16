const Badge = ({ label, color }) => {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        backgroundColor: color,
        color: "#fff",
      }}
    >
      {label}
    </span>
  );
};

export default Badge;
