import { useState } from "react";
import axios from "axios";

export default function HL7Uploader() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const upload = async () => {
    const form = new FormData();
    form.append("hl7file", file);

    const res = await axios.post("http://localhost:5000/api/messages/upload", form);
    setMessage("HL7 Uploaded & Parsed Successfully!");
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow border">
      <h2 className="text-xl font-bold mb-4">Upload HL7 File</h2>

      <input
        type="file"
        accept=".hl7,.txt"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={upload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Upload HL7
      </button>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
