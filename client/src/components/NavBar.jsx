import React, { useState, useEffect } from "react";
import Switch from "./partials/themeBtn";

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "!dark");

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="flex w-full justify-between items-center p-0 h-12 shadow-md">
      <nav className="left-nav flex sm:text-lg md:text-xl lg:text-2xl pl-5 gap-x-2.5 items-center">
        <a className="relative w-10 cursor-progress h-12">
          <img src="../../logo_icon.png" alt="logo" />
        </a>
      </nav>
      <div className="right-nav flex pr-5">
        <Switch theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default NavBar;