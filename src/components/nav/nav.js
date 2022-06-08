import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./nav.css";

const Nav = ({ siteTitle, siteLink }) => {
    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <header className="navbar">
            {/* <img src={require('../images/DevLogo001.png')} alt="Logo" /> */}
            <p className="hover-effect" onClick={() => openLink(siteLink)}>
                {siteTitle}
            </p>
            <nav>
                <ul className="social__links">
                    <li className="hover-effect">
                        <FaGithub
                            className="icon"
                            onClick={() =>
                                openLink("http://github.mats-voss.de")
                            }
                        />
                    </li>
                    <li className="hover-effect">
                        <BsMailbox2
                            className="icon"
                            onClick={() =>
                                (window.location = "mailto:privat@mats-voss.de")
                            }
                        />
                    </li>
                    <li className="hover-effect">
                        <AiFillLinkedin
                            className="icon"
                            onClick={() =>
                                openLink("http://linkedin.mats-voss.de")
                            }
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
