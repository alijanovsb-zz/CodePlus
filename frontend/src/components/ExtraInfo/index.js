import React from "react";
import "./style.scss";

const ExtraInfo = () => {
  const extraDatas = [
    { image: "codeReview.png", text: null, size: "25%" },
    {
      image: null,
      text: {
        primary: "Помощь и поддержка",
        secondary:
          "Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику. Раз в несколько уроков вы будете получать большое самостоятельное задание, которое нужно будет сдавать на проверку. Ваша работа будет внимательно изучена, будут выявлены ошибки исправление которых поможет вам стать лучше.",
      },
      size: "60%",
    },
    {
      image: null,
      text: {
        primary: "Методика обучения",
        secondary:
          "Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.",
      },
      size: "60%",
    },

    {
      image: "methodFeature.png",
      text: null,
      size: "25%",
    },
  ];

  return (
    <div className="extraInfo">
      <div className="_content">
        {extraDatas.map((extraData, i) => (
          <div
            className="_infoItem"
            key={i}
            style={{ width: extraData.size ? extraData.size : "25%" }}
          >
            {extraData.image && (
              <img src={extraData.image} alt={"Code review"} />
            )}
            {extraData.text && (
              <div>
                <span className="_title">{extraData.text.primary}</span>
                <span className="_subTitle">{extraData.text.secondary}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraInfo;
