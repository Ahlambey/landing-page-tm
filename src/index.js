import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./LangProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <LangProvider>
        <App />
      </LangProvider>
    </Router>
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((reg) => {
      // Service worker registered successfully
    })
    .catch((err) => {
      // Service worker registration failed
    });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
