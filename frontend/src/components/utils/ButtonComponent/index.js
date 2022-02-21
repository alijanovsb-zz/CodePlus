import React from "react";
import "./style.scss";

const Button = (props) => {
  const { label, icon, style } = props;

  return (
    <button className="button" style={style}>
      <span className="_label">{label}</span>
      <span className="_icon">{icon}</span>
    </button>
  );
};

export default Button;
