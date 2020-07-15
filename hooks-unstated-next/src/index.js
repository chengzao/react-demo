import React from "react";
import ReactDOM from "react-dom";
import Counter from "./store/index";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Counter.Provider>
      <App />
    </Counter.Provider>
  </React.StrictMode>,
  rootElement
);
