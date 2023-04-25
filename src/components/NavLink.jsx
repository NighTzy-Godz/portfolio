import React from "react";

const NavLink = ({ icon, text, link, currSec }) => {
  return (
    <React.Fragment>
      <a href={`#${link}`} className={`${currSec === link ? "active" : ""}`}>
        {" "}
        <i className={icon}></i>
        {text}
      </a>
    </React.Fragment>
  );
};

export default NavLink;
