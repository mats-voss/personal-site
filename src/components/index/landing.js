import React from "react";
import Nav from "../nav/nav";
import CTAButton from "../cta-button";
import { ReactComponent as SVGGraphic } from "../../images/svg/sitting-with-laptop.svg";

import "./landing.css";

const Landing = () => {
    return (
        <section className="LandingSection" id="landing">
            <Nav siteTitle="<Mats>" siteLink={"https://github.com/mats-voss"} />
            <div className="Content">
                <HeroText />
                <SVGGraphic className="svg-graphic" />
                <CTAButton data={{ link: "/#projects", external: false }} />
            </div>
        </section>
    );
};

export default Landing;

const HeroText = () => {
    return (
        <header className="HeroHeader">
            <h1 className="Heading">
                <span className="flex-container">
                    Hello.<i className="twa twa-sparkles"></i>
                </span>
                <span style={{ display: "block" }}>I am Mats</span>
            </h1>
            <p className="SubHeading">
                <em>I design &amp; build things for the web.</em>
            </p>
        </header>
    );
};
