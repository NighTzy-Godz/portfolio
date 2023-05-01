import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import SingleProject from "./components/SingleProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    document.documentElement.className = isDarkMode;
  }, [isDarkMode]);

  const handleDarkMode = (theme) => {
    setIsDarkMode(theme);
  };

  const handleShow = (state) => {
    setIsShow(state);
  };
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout
              isDarkMode={isDarkMode}
              onDarkModeChange={handleDarkMode}
              onShowChange={handleShow}
              isShow={isShow}
            />
          }
        >
          <Route
            path="project/:projectId"
            element={<SingleProject onShowChange={handleShow} />}
          />
          <Route index element={<Home onShowChange={handleShow} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
