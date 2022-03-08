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
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./styles/themes";
import ReactModal from "react-modal";
import { uiAction } from "./app/slices/uiSlice";
import { GrClose } from "react-icons/gr";

const App = () => {
  const { theme, modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const openModal = modal === true ? "hidden" : "auto";

  const modalToggle = () => {
    dispatch(uiAction.toggleModal());
  };

  window.document.body.style.background = currentTheme.backgroundPrimary;
  window.document.body.style.color = currentTheme.color;
  window.document.body.style.overflow = openModal;

  ReactModal.setAppElement("#root");

  return (
    <>
      <Header theme={currentTheme} modal={openModal} />
      <Hero theme={currentTheme} />
      <Courses theme={currentTheme} />
      <EducationProcess theme={currentTheme} />
      <ExtraInfo theme={currentTheme} />
      <Form theme={currentTheme} />
      <Footer theme={currentTheme} />
      <ReactModal
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        isOpen={modal}
        style={{
          overlay: {
            zIndex: 1000,
            background: "rgba(34, 37, 59, 90%)",
            overflow: "hidden",
          },
          content: {
            zIndex: 999,
            overflow: "hidden",
            background: "#fff /0%",
            border: "none",
            display: "flex",
          },
        }}
      >
        <>
          <Form theme={currentTheme} />
          <div className={"_closeButton"}>
            <GrClose onClick={modalToggle} />
          </div>
        </>
      </ReactModal>
    </>
  );
};

export default App;
