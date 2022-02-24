import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import Link from "react-scroll/modules/components/Link";
import "./style.scss";

const Footer = () => {
  const navigations = [
    { label: "Чему вы научитесь", link: "courses" },
    { label: "Процесс обучения", link: "education_process" },
    { label: "Контакты", link: "contacts" },
  ];

  return (
    <div className="footer">
      <div className="_right">
        <div className="_logo">
          <img src="logo.png" alt="codeplus" width={"50%"} />
        </div>

        <div className="_iconsContainer">
          <AiFillInstagram />
          <BsTelegram />
          <AiFillFacebook />
          <AiFillYoutube />
        </div>
      </div>

      <div className="_center">
        {navigations.map((navigation, i) => (
          <Link to={navigation.link} key={i}>
            {navigation.label}
          </Link>
        ))}
      </div>

      <div className="_left">
        <div className="_contacts">
          <a href="tel:+998934351706">+998934351706</a>
          <a href="mailto: info@codeplus.uz">info@codeplus.uz</a>
        </div>

        <div className="_companyDetail">
          <span>ИП Алижанов С. Б.</span>
          <span>ИНН 745216229809</span>
          <span>ОГРНИП 315745200001358</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
