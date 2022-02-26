import React, { useEffect } from "react";
import AOS from "aos";
// import ContentLoader from "react-content-loader";//for loading
import "./style.scss";

const CardComponent = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const { text, bgColor, description, target, stack } = props.course;
  const { backgroundPrimary } = props.style;

  const localTarget = target.replace("all", "");

  return (
    <div
      className="card"
      style={{
        backgroundColor: bgColor ? bgColor : "#eaf2f5",
      }}
      data-aos="zoom-in"
      data-aos-offset="-200"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="_top">
        <span className="_targetAge" style={{ background: backgroundPrimary }}>
          {localTarget}
        </span>
      </div>
      <div className="_center">
        <span className="_text">{text}</span>
      </div>
      <div className="_bottom">
        <span className="_text">{description}</span>
        <span className="_usedInstruments">Инструменты: {stack}</span>
      </div>
    </div>

    // Add it after implementing redux and loading state
    // <ContentLoader
    //   speed={2}
    //   width={400}
    //   height={460}
    //   viewBox="0 0 400 460"
    //   backgroundColor="#f3f3f3"
    //   foregroundColor="#ecebeb"
    // >
    //   <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    // </ContentLoader>
  );
};

export default CardComponent;
