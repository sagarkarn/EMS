import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./src/App";
import { store } from "./src/store";
import { BrowserRouter } from "react-router-dom";

function Index() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Index;

if (document.getElementById("app")) {
    let root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<Index />);
}
