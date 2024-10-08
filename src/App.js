import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PreviewAbout from "./Components/PreviewAbout";
import WorkExperience from "./Components/WorkExperience";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <Portfolio data={resumeData.project} />
      <WorkExperience data={resumeData.work} />
      {/*  <PreviewAbout data={resumeData.main} />
      <About data={resumeData.main} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} /> */}
    </div>
  );
};

export default App;
