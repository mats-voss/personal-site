import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav/nav";
import Projects from "../components/projects/projects";
import Footer from "../components/footer";

const ProjectsPage = () => {
    return (
        <Layout>
            <Seo
                title={"Projects | Mats Voss"}
                description={
                    "This is my personal website that contains my current portfolio & resume. On the Projects page you can see and test all my Projects!"
                }
                image={"https://mats-voss.com/images/web-preview.png"}
            />
            <Nav siteTitle={"<Mats>"} />
            <Projects />
            <Footer />
        </Layout>
    );
};

export default ProjectsPage;
