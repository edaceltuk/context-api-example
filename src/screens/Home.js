import React, { useContext, useState } from "react";

import { Context } from "../provider/ThemeProvider";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.png";

import "./home.sass";

const Home = () => {
  const { toggleTheme, theme } = useContext(Context);

  return (
    <div className={`home home--${theme}`}>
      <div className={`card card--${theme}`}>
        <header className={`header header--${theme}`}>
          Bu {theme} bir tema
        </header>
        <div className="toggle-theme">
          <button onClick={() => toggleTheme()}>
            <img
              src={sun}
              className="theme-icon sun"
              data-selected={theme === "light"}
            />
            <img
              src={moon}
              className="theme-icon moon"
              data-selected={theme === "dark"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
