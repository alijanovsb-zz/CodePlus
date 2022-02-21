import React from "react";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Courses />
    </div>
  );
};

export default App;
