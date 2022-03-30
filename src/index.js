import React from "react";
import ReactDOM from "react-dom";
import { DarkModeContextProvider } from "./context/darkModeContext";

import App from "./App";

ReactDOM.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
  document.getElementById("root")
);
