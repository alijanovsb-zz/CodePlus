import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import NavLinks from "../utils/NavLinks";
import "./style.scss";

const Footer = ({ theme }) => {
  const { backgroundSecondary, color } = theme;

  return (
    <div className="footer">
      <div className="_left">
        <div className="_logo">
          <img src="logo.png" alt="codeplus" width={"50%"} />
        </div>

        <div className="_iconsContainer">
          <AiFillInstagram style={{ background: backgroundSecondary }} />
          <BsTelegram style={{ background: backgroundSecondary }} />
          <AiFillFacebook style={{ background: backgroundSecondary }} />
          <AiFillYoutube style={{ background: backgroundSecondary }} />
        </div>
      </div>

      <div className="_center">
        <NavLinks
          styles={{
            color: color,
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: 0,
          }}
        />
      </div>

      <div className="_right">
        <div className="contacts">
          <a href="tel:+998934351706" style={{ color: color }}>
            +998934351706
          </a>
          <a href="mailto: info@codeplus.uz" style={{ color: color }}>
            info@codeplus.uz
          </a>
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
