import React, { useState } from "react";
import "./HamburgerLM.scss";
import logo from "../img/LOGO/LOGO_1.png";



const HamburgerLM = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo1" src={logo} ></img>
      <h2>HSIPL</h2>
      {open === false ? (
        <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x ham"></i>
      ) : (
        <i
          className="fas fa-times fa-2x ham"
          onClick={() => setOpen(!open)}
        ></i>
      )}
 
      <ul className={open === false ? "nav close" : "nav open"}>
        <li><a onClick={() => setOpen(!open)}  href="self.location='HomePage.js'">Back To Home</a></li>
        <li><a onClick={() => setOpen(!open)}  href="#Research_interests">Research interests</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Research_Posters">Research Posters</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Honor and Awards">Honor and Awards</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerLM;
