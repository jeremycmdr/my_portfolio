import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";
import lightThemeIcon from "../../svg/light_mode.svg";
import darkThemeIcon from "../../svg/dark_mode.svg";

const Header = (props) => {
  const { theme, toggleTheme } = useTheme();

  const toContent = (data) => {
    props.content(data);
  };

  React.useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <>
      <div className="header_container">
        <div
          onClick={() => toContent("landing")}
          className={
            theme === "light" ? "landing_page_logo" : "landing_page_logo_light"
          }
        >
          <div>Jeremy</div>
        </div>

        <div className="menu_options_container">
          <div onClick={() => toContent("projects")} className="menu_option">
            projects
          </div>
          <div onClick={() => toContent("about")} className="menu_option">
            about
          </div>
          <div
            onClick={() => toContent("contact")}
            style={{ borderRight: "none" }}
            className="menu_option"
          >
            contact
          </div>
          <div onClick={toggleTheme} className="theme_toggle">
            <img
              src={theme === "light" ? lightThemeIcon : darkThemeIcon}
              alt="theme icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
