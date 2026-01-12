import { useState } from "react";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${formData.username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
