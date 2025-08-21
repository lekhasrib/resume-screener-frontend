import React from "react";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-box">
      <h3>Result</h3>
      <p><strong>Match Score:</strong> {result.fitScore}%</p>
      <p><strong>Summary:</strong> {result.summary}</p>

      {result.strengths?.length > 0 && (
        <>
          <strong>Strengths:</strong>
          <ul>
            {result.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}

      {result.weaknesses?.length > 0 && (
        <>
          <strong>Drawbacks:</strong>
          <ul>
            {result.weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </>
      )}

      {result.suggestions?.length > 0 && (
        <>
          <strong>Suggestions:</strong>
          <ul>
            {result.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Result;
