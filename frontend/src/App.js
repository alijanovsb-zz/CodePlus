import React from "react";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EducationProcess from "./components/EducationProcess";
import ExtraInfo from "./components/ExtraInfo";
import Form from "./components/utils/Form";
import Footer from "./components/Footer";
import "./App.scss";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./styles/themes";
import Modal from "./components/utils/Form/Modal";

const App = () => {
  const { theme, modal } = useSelector((state) => state.ui);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  window.document.body.style.background = currentTheme.backgroundPrimary;
  window.document.body.style.color = currentTheme.color;

  return (
    <>
      <Header theme={currentTheme} />
      <Hero theme={currentTheme} />
      <Courses theme={currentTheme} />
      <EducationProcess theme={currentTheme} />
      <ExtraInfo theme={currentTheme} />
      <Form theme={currentTheme} />
      <Footer theme={currentTheme} />
      <Modal modalState={modal} />
    </>
  );
};

export default App;
