import React from "react";
import { ReactComponent as ReactLogo } from "../../../assets/icons/welcome.svg";

function PortfolioCard({ data }) {
  return (
    <div className="protfolio-card">
      <div className="protfolio-image">
        <img src={data.image} alt="Protfolio Image" />
      </div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div className="portfolio-link">
        <ReactLogo />
        <p>Linkp</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
