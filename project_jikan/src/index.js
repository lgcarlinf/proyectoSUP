import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./componentes/welcomePage/welcome.js";
import NavBar from "./componentes/navBar/navBar.js";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Welcome />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
