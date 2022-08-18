import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./src/App";
import { store } from "./src/store";
import { BrowserRouter } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import "./lib/js/jquery-3.2.1.min";

function Index() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider>
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default Index;

if (document.getElementById("app")) {
    let root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<Index />);
}
