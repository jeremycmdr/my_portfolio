import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
