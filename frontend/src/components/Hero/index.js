import React, { useEffect } from "react";
import AOS from "aos";
import Button from "../utils/ButtonComponent";
import { BsArrowUpRight, BsArrowDownCircle } from "react-icons/bs";
import "./style.scss";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { uiAction } from "../../app/slices/uiSlice";

const Hero = ({ theme }) => {
  const { name } = theme;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const dispatch = useDispatch();

  const modalToggler = () => {
    dispatch(uiAction.toggleModal());
  };

  return (
    <div className="hero">
      <div
        className="_content"
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
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
              onClick={modalToggler}
            />
          </div>
        </div>
        <div className="_right">
          <img src="../heroImage.png" alt="scripting" />
        </div>
        <div className={`_scrollButton ${name}`}>
          <Link to="courses">
            <BsArrowDownCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
