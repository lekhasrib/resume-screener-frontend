import React, { useState, useRef } from "react";

const ResumeForm = ({ setResult, setLoading }) => {
  const [dragging, setDragging] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const fileInputRef = useRef(null);
  const resumeFileRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      resumeFileRef.current = e.dataTransfer.files[0];
    }
  };

  const handleSubmit = async () => {
    if (!resumeFileRef.current || !jobDesc.trim()) return alert("Provide all inputs");

    const formData = new FormData();
    formData.append("resumeFile", resumeFileRef.current);
    formData.append("jobDescription", jobDesc);

    setLoading(true);
    try {
      const response = await fetch("https://calm-forgiveness-production.up.railway.app/screen-resume", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div
        className={`drop-area ${dragging ? "dragging" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <p>{resumeFileRef.current ? resumeFileRef.current.name : "Drag & drop resume or click to upload"}</p>
        <input
          type="file"
          ref={fileInputRef}
          accept=".pdf,.doc,.docx"
          onChange={(e) => resumeFileRef.current = e.target.files[0]}
          hidden
        />
      </div>
      <div className="jd-input">
        <textarea
          className="job-desc"
          placeholder="Paste Job Description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
      </div>
      <div className="submit-btn-wrapper">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ResumeForm;
