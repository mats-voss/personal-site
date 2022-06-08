import React from "react";
import CardLinks from "./card-links";

import "./card.css";

const Card = ({ project }) => {
    return (
        <article className="cardStyle">
            <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={project.comingSoon ? "cardImg no-click" : "cardImg"}
            >
                <img
                    src={project.imgURL}
                    alt={project.title}
                    className={project.comingSoon ? "blur-img" : ""}
                />
            </a>
            <div className="cardContent">
                <h2 className="title">
                    {project.title}
                    {project.comingSoon ? <span>Coming Soon</span> : ""}
                    {project.working ? (
                        <span className="working">Work in progress</span>
                    ) : project.comingSoon ? (
                        ""
                    ) : (
                        <span className="finished">Finished</span>
                    )}
                </h2>
                <div
                    className={project.comingSoon ? "content blur" : "content"}
                >
                    <p dangerouslySetInnerHTML={{ __html: project.body }}></p>
                </div>
                <CardLinks project={project} />
            </div>
        </article>
    );
};

export default Card;
