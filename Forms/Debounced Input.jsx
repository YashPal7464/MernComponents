import { useState, useEffect } from "react";

function DebouncedForm() {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedInput(input), 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <form>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Debounced Value: {debouncedInput}</p>
    </form>
  );
}

export default DebouncedForm;
