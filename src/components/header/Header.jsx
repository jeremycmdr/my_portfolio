import React, { useState } from "react";

import "./Header.css";

const Header = (props) => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const toContent = (data) => {
    if (data === "projects") {
      props.content("projects");
    } else if (data === "about") {
      props.content("about");
    } else if (data === "contact") {
      props.content("contact");
    } else {
      props.content("landing");
    }
  };

  return (
    <>
      <div className="header_container">
        <div onClick={() => toContent("landing")} className="landing_page_logo">
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
          <div
            onClick={changeTheme}
            className={theme ? "light_theme_img" : "dark_theme_img"}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
