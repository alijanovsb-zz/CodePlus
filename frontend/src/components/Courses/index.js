import React, { useState, useEffect } from "react";
import AOS from "aos";
import CardComponent from "./CardComponent";
import ExtraCard from "./ExtraCard";
import "./style.scss";

const Courses = ({ theme }) => {
  const { backgroundPrimary, backgroundSecondary, color } = theme;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [filter, setFilter] = useState("9-13");

  const courses = [
    {
      text: "Создание игр в Scratch",
      bgColor: "#FFB359",
      description:
        "Учимся создавать и оживлять персонажей, придумывать мультики, создавать игры и программы. На понятных игровых примерах знакомится с темами математики и информатики.",
      target: "9-13 all",
      stack: "Scratch",
    },
    {
      text: "Создание мобильных приложений",
      bgColor: "#4BD071",
      description:
        "Создаём собственные мобильные приложения, которые можно устанавливать на смартфон или планшет, делится с друзьями и даже опубликовать в Google Play.",
      target: "9-13 all",
      stack: "App Inventor",
    },
    {
      text: "Язык программирования Python",
      bgColor: "#5096FF",
      description:
        "Учимся программировать на самом востребованном языке Python. Создадим программы и мини-игры.",
      target: "13-17 all",
      stack: "Python",
    },
    {
      text: "Создание ВЕБ-САЙТОВ",
      bgColor: "#e56027",
      description:
        "Изучаем основу веб-разработки и создание сайтов. Созададим собственный сайт на интересную тему с нуля.",
      target: "13-17 all",
      stack: "HTML5, CSS3, Javascript и Git",
    },
  ];

  const clickHandler = (index, filter) => {
    setFilter(filter);
    setActiveTabIndex(index);
  };

  const extras = [
    {
      id: 1,
      image: "exercise.png",
      title: "Огромное количество практики",
      subTitle:
        "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      id: 2,
      image: "method.png",
      title: "Современные методики обучения",
      subTitle:
        "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
    },
    {
      id: 3,
      image: "easy-and-simple.png",
      title: "Простое и понятное изложение",
      subTitle: "Вместо заумных терминов – примеры из реального мира",
    },
    {
      id: 4,
      image: "calendar.png",
      title: "Гибкий график занятий",
      subTitle: "Подбираем для обучения удобное для ученика время и дни",
    },
    {
      id: 5,
      image: "globe.png",
      title: "Современные технологии",
      subTitle: "Мы всегда следим за актуальностью нашей методики обучения",
    },
    {
      id: 6,
      image: "conversation.png",
      title: "Прямая связь с опытными программистами",
      subTitle: "Задавайте вопросы и отправляйте свою работу на проверку",
    },
  ];

  return (
    <div className="courses" style={{ background: backgroundSecondary }}>
      <div className="_content">
        <div
          className="_header"
          data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="50"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <span className="_title" style={{ color: color }}>
            Какие технологии вы изучите:
          </span>
        </div>

        <div
          className="_brochure"
          data-aos="flip-up"
          data-aos-offset="-200"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          style={{ background: backgroundPrimary }}
        >
          <div className="_left">
            <img src="../brochureImage.png" alt="brochure" />
          </div>
          <div className="_right">
            <div className="_list">
              {courses.map((course, i) => (
                <span
                  key={i}
                  style={{
                    background: course.bgColor,
                  }}
                >
                  {course.text}
                </span>
              ))}
            </div>
            <div className="_subTitleContainer">
              <span className="_subtitle">
                Каждый курс поможет в плавном вхождении в программирование
              </span>
            </div>
          </div>
        </div>

        <div className="_coursesListContainer">
          <div className="_header">
            <span className="_title">Программы</span>
          </div>

          <div className="_coursesList">
            <div className="_filter" style={{ color: color }}>
              <div
                onClick={() => clickHandler(1, "9-13")}
                className={`_filterItem ${activeTabIndex === 1 && "active"}`}
                style={{ background: backgroundPrimary }}
              >
                9-13
              </div>
              <div
                onClick={() => clickHandler(2, "13-17")}
                className={`_filterItem ${activeTabIndex === 2 && "active"}`}
                style={{ background: backgroundPrimary }}
              >
                13-17
              </div>
              <div
                onClick={() => clickHandler(3, "all")}
                className={`_filterItem ${activeTabIndex === 3 && "active"}`}
                style={{ background: backgroundPrimary }}
              >
                ВСЕ
              </div>
            </div>
            <div className="_list">
              {/* {filter !== "all"
                ? courses
                    .filter((course) => course.target === filter)
                    .map((course, i) => (
                      <span className="_name" key={i}>
                        {course.cName}
                      </span>
                    ))
                : courses.map((course, i) => (
                    <span className="_name" key={i}>
                      {course.cName}
                    </span>
                  ))} 
              Think how to reduce */}

              {courses
                .filter((course) => course.target.includes(filter))
                .map((course, i) => (
                  <CardComponent course={course} key={i} style={theme} />
                ))}
              {/* Still not good, since in data added all... */}
            </div>
          </div>
        </div>

        <div className="_extra">
          <div className="_header">
            <span className="_title">
              Обучение в CodePlus – это удобно и результативно
            </span>
          </div>

          <div className="_listExtra">
            {extras.map((extra) => (
              <ExtraCard extraData={extra} style={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
