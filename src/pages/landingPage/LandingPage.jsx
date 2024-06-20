import React, { useEffect, useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [progressText, setProgressText] = useState("0%");
  const completionText = useState("Not yet completed. Soon to be done😊.");

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

  return (
    <div className="content_container">
      <div className="progressBar">
        <div className="progress" style={{ width: `${progressWidth}%` }}>
          <span className="progressText">{progressText}</span>
        </div>
      </div>
      <div className="completionText">{completionText}</div>
    </div>
  );
};

export default LandingPage;
