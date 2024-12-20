import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ToggleColorModeProvider from "./utils/ToggleColorMode";
import App from "./components/App.jsx";
import store from "./app/store.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ToggleColorModeProvider>
  </Provider>,
);
