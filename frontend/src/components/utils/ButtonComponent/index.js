import React from "react";
import "./style.scss";

const Button = (props) => {
  const { label, icon } = props;

  return (
    <button className="button">
      <span className={`_label ${label === "" && "empty"}`}>{label}</span>
      <span className="_icon">{icon}</span>
    </button>
  );
};

export default Button;
