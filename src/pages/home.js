import React from "react";
import Layout from "../components/layout";
import Landing from "../components/index/landing";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Footer from "../components/footer";

import { projectCars } from "../data";

const Home = () => {
    return (
        <Layout>
            <Landing />
            <About />
            <Projects data={projectCars} />
            <Footer />
        </Layout>
    );
};

export default Home;
