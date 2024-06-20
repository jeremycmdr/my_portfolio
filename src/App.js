import React, { useState } from "react";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Landing from "./pages/landingPage/LandingPage";

const App = () => {
  const [content, setContent] = useState("landing");

  const renderContent = () => {
    switch (content) {
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Landing />;
    }
  };

  return (
    <div>
      <Header content={setContent} />
      {renderContent()}
    </div>
  );
};

export default App;
