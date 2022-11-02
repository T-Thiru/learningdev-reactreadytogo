import React from "react";

const Display = (props) => {
  return (
    <div
      className="display"
      style={{
        backgroundColor:
          props.switch1 & props.switch2 & props.switch3 ? "green" : "red",
      }}
    >
      <p> {props.switch1 & props.switch2 & props.switch3 ? "GO" : "No Way!"}</p>
    </div>
  );
};

export default Display;
