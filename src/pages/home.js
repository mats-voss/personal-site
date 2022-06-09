import React from "react";
import Layout from "../components/layout";
import Landing from "../components/index/landing";
import Seo from "../components/seo";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Footer from "../components/footer";

import { projectCars } from "../data";

const Home = () => {
    return (
        <Layout>
            <Seo
                title={"Home | Mats Voss"}
                description={
                    "This is my personal website that contains my current portfolio & resume and is constantly expanding with new features/technologies that I am learning."
                }
                image={"https://mats-voss.com/images/web-preview.png"}
            />
            <Landing />
            <About />
            <Projects data={projectCars} />
            <Footer />
        </Layout>
    );
};

export default Home;
