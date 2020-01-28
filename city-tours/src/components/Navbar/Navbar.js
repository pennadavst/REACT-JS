import React from "react";
import logo from "../../logo.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="city tours" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
