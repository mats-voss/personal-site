import React from "react";
import { ReactComponent as RightSVGGraphic } from "../../images/svg/sitting-behind-laptop.svg";
import { ReactComponent as LeftSVGGraphic } from "../../images/svg/standing-infront-webpage.svg";

import "./about.css";

const About = () => {
    return (
        <section id="about" className="aboutSection">
            <div className="content">
                <h1 className="heading">About</h1>
                <div className="subContent">
                    <LeftSVGGraphic className="leftSVG" />
                    <article>
                        <div key={"about-text"}>
                            <p>
                                I'm a hobby developer who has recently started
                                my journey as a web developer. I would describe
                                me as a <span>self-motivated</span> learner with{" "}
                                <span>strong organisation</span> &amp;{" "}
                                <span>time management</span> skills.
                            </p>
                            <p>
                                About a year ago I started to learn the basics
                                of <span>Python</span> and <span>C#</span>. I
                                created a couple projects, most of them ware in
                                the field of{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Natural_language_processing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Natural Language Processing
                                </a>{" "}
                                such as Bots.
                            </p>
                            <p>
                                For some time now I have been working with{" "}
                                <span>JavaScript</span>, jQuery,{" "}
                                <span>CSS</span> and <span>HTML</span> as well
                                as{" "}
                                <a
                                    href="https://Reactjs.org"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ReactJS
                                </a>
                                .
                            </p>
                        </div>
                    </article>
                    <RightSVGGraphic className="rightSVG" />
                </div>
            </div>
        </section>
    );
};

export default About;
