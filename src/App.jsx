import React from "react";
import Personajes from "./components/Personajes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import "./style/coolstuf.scss";
import Barrita from "./components/Barrita";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const store = generateStore();
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="page">
        {/* <Routes> */}
        {/* <Route path="/"  element={<Barrita />}/> */}
        {/* <Route path="/favorites"  element={<Personajes />}/> */}
        {/* </Routes> */}
      
        <Personajes />

      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
