import { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Uploaded File: ${file.name}`);
    } else {
      alert("No file selected");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploadForm;
