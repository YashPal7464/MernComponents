import { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([""]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  const addField = () => setFields([...fields, ""]);
  const removeField = (index) => setFields(fields.filter((_, i) => i !== index));

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <input type="text" value={field} onChange={(e) => handleChange(index, e)} />
          <button type="button" onClick={() => removeField(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
