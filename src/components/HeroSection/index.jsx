import React from "react";
import "./style.css";
import { ReactComponent as ReactLogo } from "../../assets/welcome.svg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-side">
        <div className="welcome">
          <ReactLogo />
          <span>Welcome to everyone</span>
        </div>
        <h1>Let’s <strong>Grow</strong> Your <strong>Business</strong> With My <strong>Solution</strong> Skills</h1>
        <p>Introduce all my name is james a designer who has worked in the design world for more than 10 years, ranging from office workers to freelance projects from various countries</p>
      </div>
      <div className="right-side">lol</div>
    </div>
  );
};
export default HeroSection;
