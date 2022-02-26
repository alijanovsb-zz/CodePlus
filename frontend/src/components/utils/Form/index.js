import React from "react";
import Button from "../ButtonComponent/index";
import "./style.scss";

const Form = ({ theme }) => {
  const { backgroundPrimary, backgroundSecondary, color } = theme;

  return (
    <form className="form">
      <div className="_content" style={{ background: backgroundSecondary }}>
        <div className="_header">
          <span className="_title">
            Оставьте заявку, и мы поможем выбрать курс
          </span>
          <span className="_subTitle">
            Перезвоним, ответим на все вопросы, и проведём бесплатный вводный
            урок.
          </span>
        </div>
        <div className="_inputs">
          <div className="_inputName">
            <input placeholder="Ваше имя" />
          </div>
          <div className="_inputNumber">
            <input placeholder="99-999-99-99" />
          </div>
          <div className="_inputConfirmation">
            <Button
              label="Получить консультанцию"
              style={{ borderRadius: 0, padding: "10px" }}
            />
          </div>
        </div>

        <div className="_footer"></div>
      </div>
    </form>
  );
};

export default Form;
