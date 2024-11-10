import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkExperience from "./Components/WorkExperience";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header
        data={resumeData.main}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Portfolio data={resumeData.project} />
      <WorkExperience data={resumeData.work} />
      <About data={resumeData.about} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
