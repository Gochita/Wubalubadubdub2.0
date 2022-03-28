import React from "react";
import Personajes from "./components/Personajes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Personajes />
    </Provider>
  );
}

export default App;
