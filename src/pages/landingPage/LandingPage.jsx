import React, { useEffect, useState } from "react";
import projectsData from "../../projectslist";
import { useTheme } from "../../context/ThemeContext";
import "./LandingPage.css";
import battery1 from "../../svg/battery1.svg";
import battery2 from "../../svg/battery2.svg";
import battery3 from "../../svg/battery3.svg";
import battery4 from "../../svg/battery4.svg";
import battery5 from "../../svg/battery5.svg";
import battery1dark from "../../svg/battery1_dark.svg";
import battery2dark from "../../svg/battery2_dark.svg";
import battery3dark from "../../svg/battery3_dark.svg";
import battery4dark from "../../svg/battery4_dark.svg";
import battery5dark from "../../svg/battery5_dark.svg";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

const batteryImages = [battery1, battery2, battery3, battery4, battery5];
const batteryImagesDark = [
  battery1dark,
  battery2dark,
  battery3dark,
  battery4dark,
  battery5dark,
];

const LandingPage = () => {
  const { theme } = useTheme();
  const [progressWidth, setProgressWidth] = useState(0);
  const [progressText, setProgressText] = useState("0%");
  const [completionText, setCompletionText] = useState(
    "Not yet completed. Soon to be done😊."
  );
  const [currentBattery, setCurrentBattery] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < 95) {
        currentProgress += 5;
        setProgressWidth(currentProgress);
        setProgressText(`${currentProgress}%`);
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      setCurrentBattery(
        (prevBattery) => (prevBattery + 1) % batteryImages.length
      );
    }, 1000);

    return () => clearInterval(batteryInterval);
  }, []);

  const formattedProjectsData = projectsData.map((project) => ({
    ...project,
    date: formatDate(project.date),
  }));

  const currentBatteryImages =
    theme === "dark" ? batteryImagesDark : batteryImages;

  return (
    <div className="content_container">
      <div className="flex_container">
        <div
          className={`${
            theme !== "light" ? "smaller_txt" : "smaller_txt_dark"
          }`}
        >
          I am currently charging my batteries for future projects...
        </div>
        <div>
          <img
            src={currentBatteryImages[currentBattery]}
            alt={`Battery ${currentBattery + 1}`}
            className="battery_icon"
          />
        </div>
      </div>

      {/* <div className="progressBar">
        <div className="progress" style={{ width: `${progressWidth}%` }}>
          <span className="progressText">{progressText}</span>
        </div>
      </div>
      <div className="completionText">{completionText}</div> */}
      <h1>Projects</h1>
      <div>
        {formattedProjectsData.map((project) => (
          <div key={project.id} className="project">
            <h2
              className={theme !== "light" ? "bigger_txt_dark" : "bigger_txt"}
            >
              {project.title}
            </h2>
            <div
              className={`${
                theme !== "light"
                  ? "smaller_txt about_project_dark"
                  : "smaller_txt_dark about_project_light"
              }`}
            >
              {project.description}
            </div>
            <div className="flex_container">
              <div className="project_start_date">
                Date started:{" "}
                <span className="project_date">{project.date}</span>
              </div>
              <div>
                <a
                  target="_blank"
                  href={project.link_live}
                  rel="noreferrer"
                  className={
                    "social_media_svg right" +
                    (theme === "dark" ? " right_light" : "")
                  }
                >
                  {" "}
                </a>
                <a
                  target="_blank"
                  href={project.link}
                  rel="noreferrer"
                  className={
                    "social_media_svg github" +
                    (theme === "dark" ? " github_light" : "")
                  }
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
