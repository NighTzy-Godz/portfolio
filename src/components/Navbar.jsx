import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import link_data from "../data/LinksData";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import ColorOptions from "./ColorOptions";

const NavBar = ({ isShow, onDarkModeChange, onShowChange }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionMinHeight = 800;
        const sectionMaxHeight = Math.min(
          100,
          100 / (viewportHeight / sectionHeight)
        );
        const sectionEffectiveHeight =
          sectionMinHeight +
          ((sectionMaxHeight - sectionMinHeight) *
            (viewportHeight - sectionMinHeight)) /
            (sectionHeight - sectionMinHeight);

        if (
          scrollPosition >= sectionTop - sectionEffectiveHeight / 3 &&
          scrollPosition < sectionTop + sectionEffectiveHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLinks = link_data.map((item) => {
    const isActive = activeSection === item.value;

    return (
      <li key={item.id}>
        <NavLink
          onShowChange={onShowChange}
          icon={item.icon}
          text={item.label}
          link={item.value}
          isActive={isActive}
        />
      </li>
    );
  });

  return (
    <nav className={`mainNav ${isShow ? "show" : ""}`}>
      <i
        className="fa-solid fa-arrow-left"
        id="navClose"
        onClick={() => onShowChange(false)}
      ></i>
      <div className="container">
        <Link to="/" className="logo">
          ASER
        </Link>
        <ul>{renderNavLinks}</ul>

        <ColorOptions onDarkModeChange={onDarkModeChange} />
      </div>
    </nav>
  );
};

export default NavBar;
