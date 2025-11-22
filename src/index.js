import React from "react"; // react library itself
import ReactDOM from "react-dom/client"; // glue between the react elements and the DOM
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);