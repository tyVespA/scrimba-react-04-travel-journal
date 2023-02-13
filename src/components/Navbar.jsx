import React from "react";
import "../styles/Navbar.module.css";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="" />
      <p>my travel journal.</p>
    </nav>
  );
}

export default Navbar;
