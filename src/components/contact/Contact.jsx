import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  console.log(theme);
  const email = "jeremijavaragic@gmail.com";
  return (
    <>
      <div className="content_container">
        <div style={{ marginTop: "20px" }} className="find_me_on_social_media">
          Find me on :
        </div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jeremija-varagi%C4%87/"
          rel="noreferrer"
          className={
            "social_media_svg linkedin" +
            (theme === "dark" ? " linkedin_light" : "")
          }
        >
          {" "}
        </a>
        <a
          target="_blank"
          href="https://github.com/jeremycmdr"
          rel="noreferrer"
          className={
            "social_media_svg github" +
            (theme === "dark" ? " github_light" : "")
          }
        >
          {" "}
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/jeremija.varagic"
          rel="noreferrer"
          className={
            "social_media_svg facebook" +
            (theme === "dark" ? " facebook_light" : "")
          }
        >
          {" "}
        </a>
        <a
          href={`mailto:${email}`}
          className={
            "social_media_svg mail_to" +
            (theme === "dark" ? " mail_to_light" : "")
          }
        >
          {" "}
        </a>
      </div>
    </>
  );
};

export default Contact;
