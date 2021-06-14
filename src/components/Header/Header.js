import React from "react";
import logo from "./../../assets/spoon-knife.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" height="30" />
      <div>What's for dinner</div>
    </header>
  );
}

export default Header;
