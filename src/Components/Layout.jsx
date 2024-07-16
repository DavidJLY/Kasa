import React from "react";
import logoHeader from "../assets/logoHeader.png";
import logoFooter from "../assets/logoFooter.png";
import "../style/Layout.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo"></img>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="logo" className="logo_footer"></img>
      <p>@ 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
