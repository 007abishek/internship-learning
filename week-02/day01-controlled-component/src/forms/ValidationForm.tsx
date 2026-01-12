import { useState } from "react";

const ValidationForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Validation</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidationForm;
