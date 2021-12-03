// index.js se encarga de agarrar toda la app de React y llevarla al DOM. (pasa solo acá. Levanta la app en el navegador)
// 1) Necesitamos la variable React en scope
import React, { StrictMode } from "react";
// 2) Necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom";
// 3) Necesitamos una aplicación de React
import App from "./App";
// fonts
import FontStyles from "./styles/fontStyles";

// 4) Necesitamos dibujar la aplicación en el DOM
ReactDOM.render(
    <React.StrictMode>
        <FontStyles />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);