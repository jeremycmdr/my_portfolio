import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import Header from "./../../components/header/Header.jsx";
import Projects from "../../components/projects/Projects.jsx";
import About from "../../components/about/About.jsx";
import Contact from "../../components/contact/Contact.jsx";

const LandingPage = () => {
  const [toProjects, setToProjects] = useState(false);
  const [toAbout, setToAbout] = useState(false);
  const [toContact, setToContact] = useState(false);
  const email = "jeremijavaragic@gmail.com";

  const setContent = (data) => {
    if (data === "projects") {
      setToProjects(true);
      setToAbout(false);
      setToContact(false);
    } else if (data === "about") {
      setToAbout(true);
      setToProjects(false);
      setToContact(false);
    } else if (data === "contact") {
      setToContact(true);
      setToAbout(false);
      setToProjects(false);
    } else {
      setToContact(false);
      setToAbout(false);
      setToProjects(false);
    }
  };

  return (
    <>
      <Header content={setContent}></Header>
      {toProjects && <Projects></Projects>}
      {toAbout && <About></About>}
      {toContact && <Contact></Contact>}
      {!toProjects && !toAbout && !toContact && (
        <div className="content_container">
          <div className="who_i_am">
            Hello, I'm{" "}
            <span onClick={() => setContent("about")}>Jeremija Varagić</span>
            <span style={{ color: "black" }}>,</span>
          </div>

          <div className="what_i_am">
            a passionate web developer with two year of experience in the
            dynamic world of web development. I'm based in the beautiful town of{" "}
            <a
              className="visit_my_town"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Zvornik"
              rel="noreferrer"
            >
              Zvornik
            </a>
            , located in Bosnia and Herzegovina. My journey in the tech industry
            began with a curiosity for building digital experiences and has
            since grown into a profound love for creating interactive,
            user-friendly web applications.
          </div>
          <div className="what_is_this_all_about">
            My primary areas of expertise lie in React, JavaScript, and Node.js.
            Over the past year, I've honed my skills in these technologies,
            enabling me to craft responsive and engaging web solutions. I'm also
            familiar with Flutter and Dart, and while my experience in these
            technologies is still growing, I'm excited to continue learning and
            exploring new avenues in the world of app development.
          </div>
          <div className="what_is_this_all_about">
            I thrive on challenges, constantly seeking to expand my knowledge
            and skills in the ever-evolving field of web development. With a
            strong foundation in the core technologies and a willingness to
            adapt to new tools and methodologies, I'm dedicated to delivering
            high-quality solutions that meet the needs of both clients and
            end-users.
          </div>
          <div className="what_is_this_all_about">
            I'm excited about the endless possibilities in web development and
            eager to contribute my expertise to projects that push the
            boundaries of what's possible. If you're looking for a dedicated,
            adaptable, and enthusiastic developer to join your team or tackle
            your next project, I'm ready to take on the challenge.
          </div>
          <div className="what_is_this_all_about">
            Thank you for taking the time to get to know me, and I look forward
            to the opportunity to work together and turn ideas into reality.
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="find_me_on_social_media"
          >
            - find me on :
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
      )}
    </>
  );
};

export default LandingPage;
