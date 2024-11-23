import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import logo from "../images/logo.png";

function Header({ serviceView = false, backLink = "/" }) {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo da Empresa" className="logo" />
          <span>Welcome to JP Solutions!</span>
        </div>
        <Navbar serviceView={serviceView} backLink={backLink} />
      </div>
    </header>
  );
}

export default Header;
