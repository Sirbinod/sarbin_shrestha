import React from "react";

function ConnectionIcon({ icon }) {
  console.log(icon, "99999999999999999999");
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
