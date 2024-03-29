import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NotificContext from "./NotificContext";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotificContext>
  </React.StrictMode>
);
