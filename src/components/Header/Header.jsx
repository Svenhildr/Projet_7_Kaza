import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header>
        <nav>
          <Logo />
          <Link to="/home">
            <a>Accueil</a>
          </Link>
          <Link to="/about">
            <a>A Propos</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
