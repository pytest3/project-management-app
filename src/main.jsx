import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App></App>
    </AuthContextProvider>
  </React.StrictMode>
);
