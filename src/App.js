import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skill/skills";
import Works from "./components/Works/works";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
import Certificates from "./components/certificates/certificates";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`rootClass ${darkMode ? "darkMode" : "lightMode"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Intro darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      {/* <Skills /> */}
      <Certificates darkMode={darkMode} />
      {/* <Works /> */}
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
