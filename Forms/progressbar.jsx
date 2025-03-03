import { useState } from "react";

function StepperForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <progress value={step} max="3"></progress>
      {step === 1 && <input name="name" placeholder="Name" onChange={handleChange} />}
      {step === 2 && <input name="age" placeholder="Age" onChange={handleChange} />}
      <button onClick={() => setStep((prev) => Math.max(1, prev - 1))}>Back</button>
      {step < 3 ? <button onClick={() => setStep((prev) => prev + 1)}>Next</button> : <button onClick={() => alert(JSON.stringify(formData))}>Submit</button>}
    </div>
  );
}

export default StepperForm;
