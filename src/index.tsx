import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/GlobalStyles/index";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </React.StrictMode>,
    );
}