import React from "react";

const Switch = (props) => {
  return (
    <div
      className="switch"
      onClick={() => {
        const onOff = "On";
        if (props.btn === onOff) {
          props.setSwitch(props.switchBtn === true);
        } else {
          props.setSwitch(props.switchBtn === false);
        }
      }}
    >
      <p>{props.btn}</p>
    </div>
  );
};

export default Switch;
