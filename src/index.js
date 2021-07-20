import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";


ReactDOM.render(<App/>, document.getElementById("app"));
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
