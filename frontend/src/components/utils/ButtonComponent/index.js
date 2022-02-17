import React from "react";
import "./style.scss";

const Button = (props) => {
  return (
    <button className="button">
      <span className="_label">{props.label}</span>
      <span className="_icon">{props.icon}</span>
    </button>
  );
};

export default Button;
