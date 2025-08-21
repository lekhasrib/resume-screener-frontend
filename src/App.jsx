import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div className={`app ${darkMode ? "dark" : "light-mode"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-container">
        <div className="left-pane">
          <ResumeForm
            setResult={setResult}
            setLoading={setLoading}
            darkMode={darkMode}
          />
        </div>
        <div className="separator" />
        <div className="right-pane">
          {loading ? <Spinner /> : <Result result={result} />}
        </div>
      </div>
      <footer className="footer-resume-screener">
        <p>Designed and Developed by Sri Lekha</p>
      </footer>
    </div>
  );
}

export default App;
