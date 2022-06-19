import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

import { FaGithub } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./nav.css";

const Nav = ({ siteTitle, color }) => {
    const navRef = useRef();

    const toggleNav = () => {
        navRef.current.classList.toggle("toggle");
        setNavOpen(!navOpen);
    };

    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <nav className="navbar toggle" ref={navRef}>
                {/* <img src={require('../images/DevLogo001.png')} alt="Logo" /> */}
                <Link to="/" onClick={toggleNav}>
                    <h1 className="hover-effect">{siteTitle}</h1>
                </Link>
                <ul className="text__links">
                    <li className="hover-effect" onClick={toggleNav}>
                        <Link to="/about">
                            <i className="twa twa-woman-technologist-medium-light-skin-tone"></i>{" "}
                            About
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/projects" className="hover-effect">
                            <i className="twa twa-card-file-box"></i> Projects
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/timeline" className="hover-effect">
                            <i className="twa twa-bookmark-tabs"></i> Timeline
                        </Link>
                    </li>
                </ul>
                <ul className="social__links">
                    <li className="hover-effect" onClick={toggleNav}>
                        <a
                            href="https://github.com/mats-voss"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li className="hover-effect" onClick={toggleNav}>
                        <a
                            href="https://github.com/mats-voss"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsMailbox2 />
                        </a>
                    </li>
                    <li className="hover-effect" onClick={toggleNav}>
                        <a
                            href="https://github.com/mats-voss"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin />
                        </a>
                    </li>
                    {/* <ThemeToggle /> */}
                </ul>
            </nav>
            <div className="styledHamburger" onClick={toggleNav}>
                <Hamburger
                    toggled={navOpen}
                    toggle={setNavOpen}
                    rounded
                    label="Show menu"
                    color={navOpen ? "#fff" : color ? color : "#fff"}
                ></Hamburger>
            </div>
        </>
    );
};

export default Nav;
