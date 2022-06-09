import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav/nav";
import About from "../components/about/about";
import Footer from "../components/footer";

const AboutPage = () => {
    return (
        <Layout>
            <Seo
                title={"About | Mats Voss"}
                description={
                    "This is my personal website that contains my current portfolio & resume. Here you can read a little bit about me!"
                }
                image={"https://mats-voss.com/images/web-preview.png"}
            />
            <Nav siteTitle={"<Mats>"} />
            <About />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
