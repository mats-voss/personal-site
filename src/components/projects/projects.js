import React from "react";
import Card from "./card";
import { projectCars } from "../../data";

import "./projects.css";

const Projects = () => {
    return (
        <section className="projectsSection" id="projects">
            <div className="content">
                <h1 className="heading">Projects</h1>
                <section className="cards">
                    {projectCars.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </section>
            </div>
        </section>
    );
};

export default Projects;
