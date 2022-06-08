import React from "react";
import { FaAngleRight } from "react-icons/fa";

import "./card-links.css";

const CardLinks = ({ project: { demo, github, comingSoon } }) => {
    return (
        <div className="links">
            <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className={comingSoon ? "blur no-click" : ""}
            >
                Live Demo
                <FaAngleRight />
            </a>
            <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={comingSoon ? "blur no-click" : ""}
            >
                Github
                <FaAngleRight />
            </a>
        </div>
    );
};

export default CardLinks;
