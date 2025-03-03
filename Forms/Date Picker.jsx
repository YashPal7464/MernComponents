import { useState } from "react";

function DateForm() {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Date: ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DateForm;
