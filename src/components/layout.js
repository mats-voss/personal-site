import React from "react";
import "./layout.css";

const Layout = ({ children, path }) => {
    return (
        <main key={path} className="main">
            <div className="backgroundGradients" />
            <div className="backgroundDots" />
            {children}
        </main>
    );
};

export default Layout;
