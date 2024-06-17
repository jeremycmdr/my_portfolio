import React from "react";
import "./Contact.css";

const Contact = () => {
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
          className="social_media_svg linkedin"
        >
          {" "}
        </a>
        <a
          target="_blank"
          href="https://github.com/jeremycmdr"
          rel="noreferrer"
          className="social_media_svg github"
        >
          {" "}
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/jeremija.varagic"
          rel="noreferrer"
          className="social_media_svg facebook"
        >
          {" "}
        </a>
        <a href={`mailto:${email}`} className="social_media_svg mail_to">
          {" "}
        </a>
      </div>
    </>
  );
};

export default Contact;
