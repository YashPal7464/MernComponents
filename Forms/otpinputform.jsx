import { useState } from "react";

function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {otp.map((digit, index) => (
        <input key={index} maxLength="1" onChange={(e) => handleChange(index, e)} value={digit} />
      ))}
      <button type="submit">Verify</button>
    </form>
  );
}

export default OTPForm;
