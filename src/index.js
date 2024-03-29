import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <p class="source-code">
      <a href="https://github.com/bbeltran22/new-wp">Open Source Code</a> By
      Breanna Beltran
    </p>
  </React.StrictMode>
);

reportWebVitals();
