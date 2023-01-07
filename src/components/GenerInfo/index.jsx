import React from "react";
import Card from "../Common/Card";
import Welcome from "../Common/Welcome";
import "./style.css";
import { ReactComponent as Communication } from "../../assets/icons/communication.svg";
import { ReactComponent as Quality } from "../../assets/icons/quality.svg";
import { ReactComponent as Fast } from "../../assets/icons/fast.svg";

function GenerInfo() {
  const CardInfo = [
    {
      id: 1,
      icon: <Communication />,
      title: "Good Communication",
      description:
        "Easier to work smooth and active communication and comfortable for delivering a good message",
    },

    {
      id: 2,
      icon: <Quality />,
      title: "Best Quality",
      description:
        "With more then 3 years of experience presenting quality that has been honed  and guarantees the quality",
    },
    {
      id: 3,
      icon: <Fast />,
      title: "Faster Completely",
      description:
        "Assurance that work is completed faster to meet client deadline and allowances for revisions",
    },
  ];
  return (
    <div className="container ">
      <div className="gener-info">
        <div className="info-top-contain">
          <div className="welcome-center">
            <Welcome data="Why should to choose me" />
          </div>
          <h1>
            This 3 <strong>Reason</strong> To Why <strong>Choose</strong>Me
          </h1>
            <p>
              From what I understand based on what we've discussed so far,
              ensure higher efficiency and employee performance.
            </p>
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

export default GenerInfo;
