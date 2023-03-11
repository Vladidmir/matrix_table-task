import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { MatrixProvider } from "context/matrixContext/MatrixProvider";

import "./styles/global.scss";
const rootElem = document.getElementById("root") as HTMLElement;

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <MatrixProvider>
        <App />
      </MatrixProvider>
    </React.StrictMode>
  );
}
