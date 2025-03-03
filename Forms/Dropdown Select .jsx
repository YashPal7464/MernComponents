import { useState } from "react";

function SelectForm() {
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Country: ${country}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Canada">Canada</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelectForm;
