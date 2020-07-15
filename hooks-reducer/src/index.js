import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./store/redux";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  rootElement
);
