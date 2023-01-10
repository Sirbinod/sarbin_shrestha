import React from "react";

function ConnectionIcon({ icon }) {
  return (
    <div
      style={{
        background: icon.background,
        padding: icon.padding,
        borderRadius: "10px",
      }}
    >
      {icon.icon}
    </div>
  );
}

export default ConnectionIcon;
