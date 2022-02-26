import React, { useEffect } from "react";
import AOS from "aos";
import "./style.scss";

const ExtraCard = (props) => {
  const { image, title, subTitle, id } = props.extraData;
  const { backgroundPrimary, color } = props.style;

  useEffect(() => {
    AOS.init({ duration: 1000 * id });
  });

  return (
    <div
      className="extra"
      key={id}
      data-aos="fade-down"
      data-aos-offset="-200"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      style={{
        background: backgroundPrimary,
        color: color,
      }}
    >
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
