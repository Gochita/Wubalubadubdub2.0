import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./components/Favoritos";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
