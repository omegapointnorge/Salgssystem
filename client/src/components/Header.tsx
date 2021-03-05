import React from "react";
import logo from "../assets/itverketLogo.jpg";

export const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-4">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="col-md-4">
          <h1>ITverket Salgssystem</h1>
        </div>
      </div>
    </div>
  );
};
