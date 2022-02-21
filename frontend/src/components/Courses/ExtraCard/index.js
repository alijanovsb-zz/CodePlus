import React from "react";
import "./style.scss";

const ExtraCard = ({ extraData }, key) => {
  const { image, title, subTitle } = extraData;

  return (
    <div className="extra" key={key}>
      <div className="_topSection">
        <img src={image} alt={image} />
      </div>

      <div className="_titleContainer">
        <span className="_title">{title}</span>
      </div>

      <div className="_subTitleContainer">
        <span className="_subTitle">{subTitle}</span>
      </div>
    </div>
  );
};

export default ExtraCard;
