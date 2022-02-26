import React from "react";
import "./style.scss";

const Button = (props) => {
  const { label, icon, onClick, style } = props;

  return (
    <button className="button" style={style} onClick={onClick}>
      <span className="_label">{label}</span>
      <span className="_icon">{icon}</span>
    </button>
  );
};

export default Button;
