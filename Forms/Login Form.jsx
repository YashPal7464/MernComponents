import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setError("Invalid email format");
      return;
    }
    alert("Logged in!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input name="password" type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
