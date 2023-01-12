import React from "react";
import Welcome from "../Common/Welcome";
import "./style.css";
import { ReactComponent as Communication } from "../../assets/icons/communication.svg";
import { ReactComponent as Quality } from "../../assets/icons/quality.svg";
import { ReactComponent as Fast } from "../../assets/icons/fast.svg";
import Card from "../Common/Card";

function Service() {
  const CardInfo = [
    {
      id: 1,
      icon: <Communication />,
      title: "ReactJS",
      description:
        "Easier to work smooth and active communication and comfortable for delivering a good message",
    },

    {
      id: 2,
      icon: <Quality />,
      title: "NodeJS",
      description:
        "With more then 3 years of experience presenting quality that has been honed  and guarantees the quality",
    },
    {
      id: 3,
      icon: <Fast />,
      title: "Database",    
      description:
        "Assurance that work is completed faster to meet client deadline and allowances for revisions",
    },
  ];
  return (
    <div className="container">
      <div className="service">
        <Welcome data="Services of my skill" />
        <div className="service-content">
          <div className="detail">
            <h1>
              My <strong>Service</strong> For <br />
              Help Your <strong>Business</strong>
            </h1>
          </div>
          <div className="detail">
            <p>
              Devox Software is a leading React JS development company ⚡ Our
              React JS experts create high-quality solutions to help you reach
              your business objectives.
            </p>
          </div>
        </div>
        <div className="card-grid">
          {CardInfo.map((card) => (
            <Card data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
