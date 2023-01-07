import React from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

function Card({ data }) {
  return (
    <div className="card">
      <div className="card-icon">{data.icon}</div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="learn-more">
        <span>Learn More</span>
        <Arrow />
      </div>
    </div>
  );
}

export default Card;
