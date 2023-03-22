import React from "react";
import "../PageNotFound/PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="notFound">
      <h1>404 </h1>
      <p>Oups! La Page que vous demandez n'existe pas.</p>
      <a href="#"> Retourner sur la page d'accueil</a>
    </div>
  );
}
