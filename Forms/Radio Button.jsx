import { useState } from "react";

function RadioForm() {
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Gender: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
        Female
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RadioForm;
