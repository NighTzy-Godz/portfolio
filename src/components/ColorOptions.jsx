import React, { useState } from "react";

function ColorOptions({ onDarkModeChange }) {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="color_options">
      <h3>Pick a Color Theme </h3>
      <button onClick={handleMenuClick}>
        {clicked ? "Close this window" : "Choose a Theme"}
      </button>
      {clicked && (
        <div className="color_options_container">
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
          <div
            className="colors"
            style={{ backgroundColor: "#dadbdc" }}
            onClick={() => onDarkModeChange("dmg_theme")}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ColorOptions;
