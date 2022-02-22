import React from "react";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EducationProcess from "./components/EducationProcess";
import "./style.App.css";
import ExtraInfo from "./components/ExtraInfo";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Courses />
      <EducationProcess />
      <ExtraInfo />
    </div>
  );
};

export default App;
