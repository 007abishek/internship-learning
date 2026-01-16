const Input = ({ placeholder, value, disabled }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={() => {}}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default Input;   // ✅ THIS LINE WAS MISSING
