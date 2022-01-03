import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
//import Movies from "./components/movies";
import Router from "./components/routing/routers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
