import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as HomeLink } from "react-scroll";

const NavLink = ({ icon, text, link, isActive, onShowChange }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      {location.pathname === "/" ? (
        <HomeLink
          to={link}
          spy={true}
          smooth={true}
          duration={200}
          onClick={() => onShowChange(false)}
          // className={`${isActive ? "active" : ""}`}
        >
          <i className={icon}></i>
          {text}
        </HomeLink>
      ) : (
        <Link
          to={`/#${link}`}
          className={`${isActive ? "active" : ""}`}
          onClick={() => onShowChange(false)}
        >
          <i className={icon}></i>
          {text}
        </Link>
      )}
    </React.Fragment>
  );
};

export default NavLink;
