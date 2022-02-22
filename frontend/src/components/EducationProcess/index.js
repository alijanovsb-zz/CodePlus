import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "../utils/ButtonComponent";
import "./style.scss";

const EducationProcess = () => {
  const infos = [
    {
      index: "01",
      title: "Весь материал разбит на небольшие уроки",
      subTitle:
        "Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.",
    },
    {
      index: "02",
      title: "Обучение через практику",
      subTitle:
        "Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.",
    },
    {
      index: "03",
      title: "Нет ограничений по времени",
      subTitle:
        "Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.",
    },
  ];

  return (
    <div className="education_process">
      <div className="_header">
        <span className="_title">Как происходит обучение на YtYt?</span>
        <span className="_subTitle">
          Обучение должно быть комфортным. Поэтому мы разработали собственную
          методику для обучения программированию.
        </span>
      </div>

      {/* <div className="_videoContainer">
        Video
      </div> */}
      {/* after selecting, choosing and editing video add this section */}

      <div className="_info">
        <div className="_content">
          {infos.map((info, i) => (
            <div className="_item" key={i}>
              <div className="_topSection">
                <span className="_text">{info.index}</span>
              </div>
              <div className="_centerSection">
                <span className="_text">{info.title}</span>
              </div>
              <div className="_bottomSection">
                <span className="_text">{info.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="_footer">
        <div className="_content">
          <Button
            label="Начать обучение"
            icon={<BsArrowUpRight />}
            style={{ padding: "20px", fontSize: "16px", fontWeight: "400" }}
          />

          <span className="_extraInfo">
            Попробуйте, первый урок бесплатный!
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationProcess;
