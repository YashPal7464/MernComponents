import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function CaptchaForm() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" required />
      <ReCAPTCHA sitekey="your-site-key" onChange={setCaptchaValue} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CaptchaForm;
