import React from "react";
import PortfolioCard from "../Common/PortfolioCard";
import Welcome from "../Common/Welcome";
import "./style.css";
import Image1 from "../../assets/images/prot1.jpeg";
import Image2 from "../../assets/images/prot2.jpeg";

function Portfolio() {
  const portfolio = [
    {
      image: Image1,
      name: "E-Pharma (medicine and drug)",
      description:
        "Drug is any substance other than food which has a physiological effect when ingested or otherwise introduced into the body.",
    },
    {
      image: Image2,
      name: "Restaurant Management System",
      description:
        "A restaurant management system is a type of software that has been specifically designed for use within the restaurant industry",
    },
  ];
  return (
    <div className="container">
      <div className="portfolio">
        <div className="portfolio-top">
          <div className="welcome-center">
            <Welcome data="Show my best portfolio" />
          </div>
          <h1>
            The Best <strong>Portfolio</strong> From My <strong>Works</strong>
          </h1>
          <p>
            From what I understand based on what we've discussed so far, ensure
            higher efficiency and employee performance.
          </p>
        </div>
        <div className="cards-grid">
          {portfolio.map((data) => (
            <PortfolioCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
