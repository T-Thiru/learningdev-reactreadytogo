import React from "react";
import logo from "../img/rocket.svg";

const Logo = () => {
  return (
    <div className="container-logo ">
      <img className="logo" src={logo} alt="" />
      <p>Ready to Go</p>
    </div>
  );
};

export default Logo;
