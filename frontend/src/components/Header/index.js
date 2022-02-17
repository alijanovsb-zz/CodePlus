import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "../utils/ButtonComponent";
import "./style.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const navigations = [
    { label: "Чему вы научитесь", link: "courses" },
    { label: "Процесс обучения", link: "education_process" },
    { label: "Контакты", link: "contacts" },
  ];

  const changeNavbar = () => {
    window.scrollY > 100 ? setFixedNavbar(true) : setFixedNavbar(false);
  };

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className={`header fix-${fixedNavbar}`}>
      <div className="_content">
        <div className="_logo">
          <span className="_title">CodePlus</span>
        </div>
        <div className={`_navigation show-${menuOpen}`}>
          <nav className="_navigationContent">
            {navigations.map((navigation, i) => (
              <Link to={navigation.link} key={i} className="_navItem">
                {navigation.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="_buttonContainer">
          <Button label="Начать обучение" icon={<BsArrowUpRight />} />
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
