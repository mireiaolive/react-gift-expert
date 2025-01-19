import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp.jsx";
import "../src/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    //el modo estrico solo se aplica en desarrollo
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
);
