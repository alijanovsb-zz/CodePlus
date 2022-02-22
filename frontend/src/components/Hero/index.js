import React from "react";
import Button from "../utils/ButtonComponent";
import { BsArrowUpRight, BsArrowDownCircle } from "react-icons/bs";
import "./style.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="_content">
        <div className="_left">
          <div className="_titleContainer">
            <span className="_title">
              Школа &#123;программирования&#125; для тех, кому нужны актуальные
              навыки, а не просто сертификат
            </span>
          </div>
          <div className="separator"></div>
          <div className="_subTitleContainer">
            <span className="_subtitle">
              Заполните форму, чтобы получить доступ к бесплатным вводным
              урокам.
            </span>
          </div>
          <div className="_buttonContainer">
            <Button
              label="Начать обучение"
              icon={<BsArrowUpRight />}
              style={{ padding: "20px", fontSize: "20px", fontWeight: "400" }}
            />
          </div>
        </div>
        <div className="_right">
          <img src="../heroImage.png" alt="scripting" />
        </div>
        <div className="_scrollButton">
          <BsArrowDownCircle />
        </div>
      </div>
    </div>
  );
};

export default Hero;
