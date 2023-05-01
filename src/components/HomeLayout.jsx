import React, { useState } from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = ({ isShow, isDarkMode, onShowChange, onDarkModeChange }) => {
  return (
    <React.Fragment>
      <NavBar
        isShow={isShow}
        isDarkMode={isDarkMode}
        onDarkModeChange={onDarkModeChange}
        onShowChange={onShowChange}
      />

      <div className="main_content">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
