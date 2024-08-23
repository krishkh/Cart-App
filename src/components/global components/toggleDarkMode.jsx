import React, { useState } from "react";

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State variable for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle state on button click
    document.documentElement.classList.toggle("dark"); // Add/remove dark class from HTML
    console.log(document.documentElement.classList);
  };

  return (
    <div className="absolute z-20 top-[1em] sticky ">
      <button
        className="flex py-1 text-10 h-10 mt-4 mx-8 p-2 bg-gray-100 dark:bg-white rounded-2xl"
        onClick={toggleDarkMode}
      >
        <img className="w-8 h-8" src="dark-mode.png" />
      </button>
    </div>
  );
}

export default ToggleDarkMode;
