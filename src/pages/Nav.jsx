import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="mararial">
      <Link to="/">Contact Us</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/button">Button</Link>
      <Link to="/customcss ">Custom CSS</Link>
      <Link to="/form">Form</Link>
      <Link to="/card">Card</Link>
    </div>
  );
};

export default Nav;
