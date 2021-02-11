import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import UserProvider from "./context/UserProvider.js";
import "semantic-ui-css/semantic.min.css";
import "./css/styles.css";
import ContentProvider from "./context/ContentProvider.js";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <ContentProvider>
                <App />
            </ContentProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
