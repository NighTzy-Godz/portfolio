import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./components/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.className = isDarkMode;
  }, [isDarkMode]);

  const handleDarkMode = (theme) => {
    setIsDarkMode(theme);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout
              isDarkMode={isDarkMode}
              onDarkModeChange={handleDarkMode}
            />
          }
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
