import "./App.css";
import BusinessCard from "./BusinessCard.js";
import ToggleSelector from "./ToggleSelector";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((mode) => !mode);
  }

  return (
    <>
      <ToggleSelector darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <BusinessCard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
