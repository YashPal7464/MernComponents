import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Name</h2>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Email</h2>
          <input name="email" placeholder="Email" onChange={handleChange} />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Password</h2>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button onClick={prevStep}>Back</button>
          <button onClick={() => alert(JSON.stringify(formData))}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
