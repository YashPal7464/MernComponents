// MultiStepForm.js
import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <FormContainer>
      {step === 1 && <p>Step 1: Enter Name</p>}
      {step === 2 && <p>Step 2: Enter Email</p>}
      {step === 3 && <p>Step 3: Review & Submit</p>}
      {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
    </FormContainer>
  );
}

// Usage in App.js
// import MultiStepForm from './MultiStepForm';
// <MultiStepForm />
