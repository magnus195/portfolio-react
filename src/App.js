import './App.scss';
import Intro from "./components/IntroComponent";
import Skills from "./components/SkillsComponent";
import Projects from "./components/ProjectsComponent";
import Contact from "./components/ContactComponent";
import React from "react";

function App() {
  return (
    <div className="App">
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
