import { useState, useEffect } from "react";

function AutoFillForm() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser({ name: data.name, email: data.email }));
  }, []);

  return (
    <form>
      <input value={user.name} readOnly />
      <input value={user.email} readOnly />
    </form>
  );
}

export default AutoFillForm;
