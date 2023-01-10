import React from "react";
import Welcome from "../Common/Welcome";
import "./style.css";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Insta } from "../../assets/icons/insta.svg";
import { ReactComponent as TW } from "../../assets/icons/tw.svg";
import { ReactComponent as Linkin } from "../../assets/icons/linkin.svg";
import Cover from "../../assets/images/cover.jpg";
import ConnectionIcon from "../Common/ConnectionIcon";

function About() {
  const connctionData = [
    {
      icon: <Insta />,
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      padding: "10px 10px 8px 10px",
    },
    {
      icon: <TW />,
      background: "#00acee",
      padding: "11px 8px 8px 10px",
    },
    {
      icon: <Linkin />,
      background: "#0A66C2",
      padding: "10px 9px 9px 10px",
    },
  ];
  return (
    <div className="about">
      <div className="container">
        <div className="about-contain">
          <div className="about-left">
            <div className="cover-image">
              <img src={Cover} alt="cover image" />
            </div>
          </div>
          <div className="about-right">
            <Welcome data="This about me guys" />
            <h1>
              Let's More To <strong>know</strong> <br />
              <strong>me</strong>
            </h1>
            <p>
              A good ‘About Me’ page should also establish trust with your
              readers and form strong connections with them. So they’ll be more
              likely to continue to support your business and choose you over
              competitors.
            </p>
            <p>
              A good ‘About Me’ page should also establish trust with your
              readers and form strong connections with them. Building trust with
              your customers helps to create brand loyalty
            </p>
            <div className="learn-more">
              <span>Learn More</span>
              <Arrow />
            </div>
            <div className="connection">
              <h2>Stay connected with:</h2>
              {connctionData.map((data) => (
                <ConnectionIcon icon={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
