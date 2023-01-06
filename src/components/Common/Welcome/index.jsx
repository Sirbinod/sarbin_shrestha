import React from "react";
import "../style.css";
import { ReactComponent as ReactLogo } from "../../../assets/icons/welcome.svg";

function Welcome({ data }) {
  return (
    <div className="welcome">
      <ReactLogo />
      <span>{data}</span>
    </div>
  );
}

export default Welcome;
