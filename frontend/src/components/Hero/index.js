import React from "react";
import Button from "../utils/ButtonComponent";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import "./style.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="_content">
        <div className="_left">
          <div className="_title">
            <h2>
              Школа &#123;программирования&#125; для тех, кому нужны реальные
              навыки, а не просто сертификат
            </h2>
          </div>
          <div className="separator"></div>
          <div className="_subTitle">
            <h6>
              Заполните форму, чтобы получить доступ к бесплатным вводным
              урокам.
            </h6>
          </div>
          <div className="_buttonContainer">
            <Button label="Начать обучение" icon={<BsArrowUpRight />} />
          </div>
        </div>
        <div className="_right">
          <img src="../heroImage.png" alt="scripting" width={"50%"} />
        </div>
        <div className="_scrollButton">
          <Button icon={<BsArrowDown />} label="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
