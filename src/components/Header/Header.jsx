import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Logo />
        <Link to="/home">Accueil </Link>
        <Link to="/about">A Propos </Link>
      </nav>
    </header>
  );
}
//
