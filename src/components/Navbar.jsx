import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import link_data from "../data/LinksData";
import NavLink from "./NavLink";

const NavBar = ({ isDarkMode, onDarkModeChange }) => {
  const renderNavLinks = link_data.map((item) => {
    return (
      <li key={item.id}>
        <NavLink icon={item.icon} text={item.label} />
      </li>
    );
  });

  return (
    <nav className="section" id="mainNav">
      <div className="container">
        <Link to="/">ASER</Link>
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
