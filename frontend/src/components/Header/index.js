import React, { useState } from "react";
import {
  BsArrowUpRight,
  BsFillMoonStarsFill,
  BsFillSunFill,
} from "react-icons/bs";
import Button from "../utils/ButtonComponent";
import "./style.scss";
import { useDispatch } from "react-redux";
import { uiAction } from "../../app/slices/uiSlice";
import NavLinks from "../utils/NavLinks";

const Header = ({ theme }) => {
  const { name, backgroundSecondary, color } = theme;

  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(uiAction.toggleTheme());
    localStorage.setItem("theme", theme.name);
  };

  const modalToggle = () => {
    dispatch(uiAction.toggleModal());
  };

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
        <div className={`_navigation show-${menuOpen} ${name}`}>
          <nav className="_navigationContent">
            <NavLinks styles={{ color: color }} onClick={closeMenu} />
            <div className="_themeToggler">
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
            onClick={modalToggle}
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
