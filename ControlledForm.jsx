import { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
