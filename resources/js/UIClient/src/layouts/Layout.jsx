import React from "react";
import Header from "./Header";

function Layout(props) {
    return (
        <div className="inner-wrapper">
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;
