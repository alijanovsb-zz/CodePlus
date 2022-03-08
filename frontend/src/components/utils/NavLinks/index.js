import { Link } from "react-scroll";
import "./style.scss";

const NavLinks = ({ onClick, styles }) => {
  const navigations = [
    { label: "Чему вы научитесь", link: "courses" },
    { label: "Процесс обучения", link: "education_process" },
    { label: "Контакты", link: "contacts" },
  ];

  return (
    <>
      {navigations.map((navigation, i) => (
        <Link
          to={navigation.link}
          key={i}
          smooth={true}
          duration={1000}
          className="_navItem"
          onClick={onClick}
          offset={-50}
          spy={true}
          activeClass="active"
          style={styles}
        >
          {navigation.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
