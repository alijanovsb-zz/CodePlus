import React, { useState } from "react";
import Button from "../ButtonComponent/index";
import "./style.scss";

const Form = ({ theme }) => {
  const { backgroundSecondary } = theme;

  const initialState = {
    nickName: "",
    phone: "",
    nameError: "",
    phoneError: "",
    date: new Date().toString(),
  };

  const [state, setState] = useState(initialState);

  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      try {
        const res = await fetch(
          "https://v1.nocodeapi.com/sardor_al/google_sheets/MfYGrWpKMYXjJRAi?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[state.nickName, state.phone, state.date]]),
          },
        );

        await res.json();
      } catch (error) {
        alert(error);
      }
      setState(initialState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const validate = () => {
    let nickNameError = "Убедитесь, что ввели своё имя!";
    let phoneError = "Убедитесь, что ввели свой телефоный номер!";

    if (state.nickName) {
      nickNameError = "";
    }

    if (state.phone) {
      phoneError = "";
    }

    if (nickNameError || phoneError) {
      setState({
        nickNameError,
        phoneError,
      });
      return false;
    }

    return true;
  };

  return (
    <form className="form" onSubmit={submitHandler}>
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
            <input
              placeholder="Ваше имя"
              name="nickName"
              value={state.nickName}
              onChange={handleChange}
            />
            {state.nickNameError && (
              <span className="_error">{state.nickNameError}</span>
            )}
          </div>
          <div className="_inputNumber">
            <input
              placeholder="99-999-99-99"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
            {state.phoneError && (
              <span className="_error">{state.phoneError}</span>
            )}
          </div>
          <div className="_inputConfirmation">
            <Button
              label="Получить консультанцию"
              style={{ borderRadius: 0, padding: "10px" }}
              type
            />
          </div>
        </div>

        <div className="_footer"></div>
      </div>
    </form>
  );
};

export default Form;
