import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import link_data from "../data/LinksData";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";

const NavBar = ({ onDarkModeChange }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    setActiveLink(currentSectionId);
  };

  const renderNavLinks = link_data.map((item) => {
    return (
      <li key={item.id}>
        <NavLink
          icon={item.icon}
          text={item.label}
          link={item.value}
          currSec={activeLink}
        />
      </li>
    );
  });

  return (
    <nav className="section" id="mainNav">
      <div className="container">
        <Link to="/" className="logo">
          ASER
        </Link>
        <ul>{renderNavLinks}</ul>

        <div className="color_options">
          <h3>Pick a Color</h3>
          <div className="color_options_container">
            {" "}
            <div
              className="colors"
              style={{ backgroundColor: "#fff" }}
              onClick={() => onDarkModeChange("")}
            ></div>
            <div
              className="colors"
              style={{ backgroundColor: "#313131" }}
              onClick={() => onDarkModeChange("dark_theme")}
            ></div>
            <div
              className="colors"
              style={{ backgroundColor: "#07737a" }}
              onClick={() => onDarkModeChange("retro_theme")}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
