import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = ({ isDarkMode, onDarkModeChange }) => {
  return (
    <React.Fragment>
      <NavBar isDarkMode={isDarkMode} onDarkModeChange={onDarkModeChange} />

      <div className="main_content">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
