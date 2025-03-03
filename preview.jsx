import { useState } from "react";

function FileUploadPreview() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(URL.createObjectURL(e.target.files[0]));

  return (
    <form>
      <input type="file" onChange={handleChange} />
      {file && <img src={file} alt="Preview" style={{ width: "100px", marginTop: "10px" }} />}
    </form>
  );
}

export default FileUploadPreview;
