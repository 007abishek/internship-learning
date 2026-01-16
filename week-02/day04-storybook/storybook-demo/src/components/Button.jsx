const Button = ({ label, disabled }) => {
  return (
    <button disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
