import { useState } from "react";

function TextareaForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Text: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Enter your message..." onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextareaForm;
