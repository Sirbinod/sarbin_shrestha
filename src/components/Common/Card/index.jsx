import React from "react";
import { ReactComponent as ReactLogo } from "../../../assets/icons/welcome.svg";

function Card({ data }) {
  return (
    <div className="card">
      <div className="card-icon">{data.icon}</div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default Card;
