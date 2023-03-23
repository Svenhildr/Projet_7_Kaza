import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Router from "./Router";
// import Home from "./views/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
//
