import { useState } from "react";

function DarkModeForm() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <form style={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000", padding: "10px" }}>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      <input type="text" placeholder="Your Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DarkModeForm;
