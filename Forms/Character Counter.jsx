import { useState } from "react";

function CharacterCounterForm() {
  const [text, setText] = useState("");

  return (
    <form>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." maxLength="200" />
      <p>Characters: {text.length} / 200</p>
    </form>
  );
}

export default CharacterCounterForm;
