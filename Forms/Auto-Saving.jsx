import { useState, useEffect } from "react";

function AutoSaveForm() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => console.log("Auto-saving:", input), 1000);
    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <form>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type here..." />
    </form>
  );
}

export default AutoSaveForm;
