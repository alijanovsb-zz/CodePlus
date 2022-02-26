import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  BsArrowUpRight,
  BsFillMoonStarsFill,
  BsFillSunFill,
} from "react-icons/bs";
import Button from "../utils/ButtonComponent";
import "./style.scss";
import { useDispatch } from "react-redux";
import { uiAction } from "../../app/slices/uiSlice";

const Header = ({ theme }) => {
  const { name, backgroundSecondary, color } = theme;

  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(uiAction.toggleTheme());
  };

  const navigations = [
    { label: "Чему вы научитесь", link: "courses" },
    { label: "Процесс обучения", link: "education_process" },
    { label: "Контакты", link: "contacts" },
  ];

  const changeNavbar = () => {
    window.scrollY > 50 ? setFixedNavbar(true) : setFixedNavbar(false);
  };

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className={`header fix-${fixedNavbar}`}>
      <div className="_content" style={{ background: backgroundSecondary }}>
        <div className="_logo">
          <span className="_title" style={{ color: color }}>
            CodePlus
          </span>
        </div>
        <div className={`_navigation show-${menuOpen}`}>
          <nav className="_navigationContent">
            {navigations.map((navigation, i) => (
              <Link
                to={navigation.link}
                key={i}
                smooth={true}
                duration={1000}
                className="_navItem"
                onClick={closeMenu}
                offset={-50}
                spy={true}
                activeClass="active"
                style={{ color: color }}
              >
                {navigation.label}
              </Link>
            ))}
            <div>
              {name === "light" ? (
                <BsFillMoonStarsFill onClick={themeToggle} />
              ) : (
                <BsFillSunFill onClick={themeToggle} />
              )}
            </div>
          </nav>
        </div>
        <div className="_buttonContainer">
          <Button
            label="Начать обучение"
            icon={<BsArrowUpRight />}
            style={{ padding: "10px", fontWeight: "400" }}
          />
        </div>
        <div
          className={`_mobileMenuButton click-${menuOpen} fix-${fixedNavbar}`}
          onClick={menuToggle}
        ></div>
      </div>
    </div>
  );
};

export default Header;
