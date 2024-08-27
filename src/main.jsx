import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FevoriteContextProvider from "../contexts/fevoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FevoriteContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FevoriteContextProvider>
);
