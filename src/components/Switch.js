import React, { useState } from "react";

const Switch = (props) => {
  const [switchOn, setSwitchOn] = useState("");
  const [switchOff, setSwitchOff] = useState("");
  return (
    <div className="container-switch">
      <div
        className={`switch ${switchOn}`}
        onClick={() => {
          props.setSwitch(true);
          setSwitchOn("blue");
          setSwitchOff("white");
        }}
      >
        <p>ON</p>
      </div>
      <div
        className={`switch ${switchOff}`}
        onClick={() => {
          props.setSwitch(false);
          setSwitchOn("white");
          setSwitchOff("purple");
        }}
      >
        <p>OFF</p>
      </div>
    </div>
  );
};

export default Switch;
