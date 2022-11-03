import React from "react";
import logo from "../img/rocket.svg";

const Logo = (props) => {
  return (
    <div className="container-logo">
      <img
        className={`logo ${
          props.switch1 & props.switch2 & props.switch3 && "logoAnimation"
        }`}
        src={logo}
        alt=""
      />
      <p>Ready to Go</p>
    </div>
  );
};

export default Logo;
