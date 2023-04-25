import React from "react";

const NavLink = ({ icon, text }) => {
  return (
    <React.Fragment>
      <i className={icon}></i>
      {text}
    </React.Fragment>
  );
};

export default NavLink;
