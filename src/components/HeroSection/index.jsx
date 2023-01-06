import React from "react";
import "./style.css";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import Cover from "../../assets/images/cover.jpg";
import Welcome from "../Common/Welcome";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="left-side">
          <Welcome data="Welcome to everyone" />
          <h1>
            Let’s <strong>Grow</strong> Your
          </h1>{" "}
          <h1>
            <strong>Business</strong> With{" "}
          </h1>
          <h1>
            My <strong>Solution</strong> Skills
          </h1>
          <p>
            Introduce all my name is james a designer who has worked in the
            design world for more than 10 years.
          </p>
          <div className="link-button">
            <button>Contact Me</button>
            <div className="cv-download">
              <Download />
              <a>Download my CV</a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="cover-image">
            <img src={Cover} alt="cover image" />
          </div>
        </div>
      </div>
      <div className="hero-bottom-side">
        <div className="container contain">
          <div className="custom-padding">
            <h1>10+</h1>
            <h3>project Well Done</h3>
          </div>
          <div>
            <h1>3+</h1>
            <h3>Experience Works</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
