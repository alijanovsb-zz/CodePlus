import React from "react";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EducationProcess from "./components/EducationProcess";
import "./style.App.css";
import ExtraInfo from "./components/ExtraInfo";
import Form from "./components/utils/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Courses />
      <EducationProcess />
      <ExtraInfo />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
