import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Подключаем App.jsx
import "./styles.css"; // Подключаем стили 
// import "modern-normalize"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

