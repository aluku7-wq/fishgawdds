import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Authprivider } from "./componets/auth/Authprivider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authprivider>
      <App />
    </Authprivider>
  </BrowserRouter>
);
