import React from "react";

import "./footer.css";

const Footer = () => {
    return (
        <section className="footerSection">
            <footer className="footerStyled">
                <ul>
                    <li className="hover-effect">
                        <a
                            href="http://github.mats-voss.de"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="hover-effect">
                        <a href="mailto:privat@mats-voss.de">Email</a>
                    </li>
                    <li className="hover-effect">
                        <a
                            href="http://linkedin.mats-voss.de"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <small>
                    &copy; 2021-{new Date().getFullYear()} All Rights Reserved,
                    Made by{" "}
                    <a
                        href="http://github.mats-voss.de"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-effect"
                    >
                        <span className="logo">&lt;Mats&gt;</span>
                    </a>
                </small>
            </footer>
        </section>
    );
};

export default Footer;
