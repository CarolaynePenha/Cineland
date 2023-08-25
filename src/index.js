import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/reset.css";
import "./styles/style.css";

const container = document.querySelector(".root");
const divRoot = ReactDOM.createRoot(container);
divRoot.render(<App />);
