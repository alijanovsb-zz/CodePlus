import React, { useState } from "react";
import ReactDom from "react-dom";
import Form from "..";
import "./style.scss";

const Modal = (props) => {
  const { modalState } = props;
  const [open, setOpen] = useState(false);

  console.log(props);

  const modalToggler = () => {
    setOpen(modalState);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlayStyle" onClick={modalToggler} />
      <div className="modal">
        <Form />
      </div>
    </>,
    document.getElementById("modalPortal"),
  );
};

export default Modal;
