import React from "react";

const LandingPage = () => {
  const updateNum = () => {
    console.log("test function");
  };

  return (
    <>
      <div onClick={updateNum}>LandingPage</div>
    </>
  );
};

export default LandingPage;
