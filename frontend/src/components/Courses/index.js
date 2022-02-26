import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import CardComponent from "./CardComponent";
import ExtraCard from "./ExtraCard";
import "./style.scss";

const Courses = ({ theme }) => {
  const { backgroundPrimary, backgroundSecondary, color } = theme;

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [filter, setFilter] = useState("9-13");
  const [courses, setCourses] = useState([]);
  const [extras, setExtras] = useState([]);

  //courses fetching
  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");

      setCourses(data);
    };

    fetchCourses();
  }, []);

  //extras fetching
  useEffect(() => {
    const fetchExtras = async () => {
      const { data } = await axios.get("/api/extras");

      setExtras(data);
    };

    fetchExtras();
  }, []);

  //for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const clickHandler = (index, filter) => {
    setFilter(filter);
    setActiveTabIndex(index);
  };

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
              {courses
                .filter((course) => course.target.includes(filter))
                .map((course, i) => (
                  <CardComponent course={course} key={i} style={theme} />
                ))}
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
