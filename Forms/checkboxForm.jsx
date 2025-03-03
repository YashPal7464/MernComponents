import { useState } from "react";

function CheckboxForm() {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Checkbox is ${checked ? "Checked" : "Unchecked"}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Accept Terms & Conditions
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckboxForm;
