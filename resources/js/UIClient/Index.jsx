import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

function Index() {
    return <App />;
}

export default Index;

if (document.getElementById("root")) {
    let root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Index />);
}
