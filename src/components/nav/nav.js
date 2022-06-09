import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./nav.css";

const Nav = ({ siteTitle }) => {
    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <nav className="navbar">
            {/* <img src={require('../images/DevLogo001.png')} alt="Logo" /> */}
            <Link to="/">
                <p className="hover-effect">{siteTitle}</p>
            </Link>
            <ul className="text__links">
                <li className="hover-effect">
                    <Link to="/about">
                        <i class="twa twa-woman-technologist-medium-light-skin-tone"></i>{" "}
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="hover-effect">
                        <i className="twa twa-card-file-box"></i> Projects
                    </Link>
                </li>
                <li>
                    <Link to="/resume" className="hover-effect">
                        <i className="twa twa-bookmark-tabs"></i> Resume
                    </Link>
                </li>
            </ul>
            <ul className="social__links">
                <li className="hover-effect">
                    <FaGithub
                        className="icon"
                        onClick={() => openLink("http://github.mats-voss.de")}
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
                        onClick={() => openLink("http://linkedin.mats-voss.de")}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
