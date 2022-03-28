import React from "react";
import Personajes from "./components/Personajes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import "./style/coolstuf.scss";
import Barrita from "./components/Barrita";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="page">
        <Barrita />
        <Personajes />
      </div>
      x
    </Provider>
  );
}

export default App;
