import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
//import { BrowserRouter } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
//import Router from "./components/routing/routers";
//import Movie from "./hoc/movie";
//import Counter from "./hooks/Counter";
//import Users from "./hooks/users";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Users /> */}
    {/* <Counter /> */}
    {/* <BrowserRouter>
      <Router />
    </BrowserRouter>
    <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
