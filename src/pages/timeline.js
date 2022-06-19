import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Nav from "../components/nav/nav";
import Footer from "../components/footer";

import "./timeline.css";

const TimeLinePage = () => {
    return (
        <Layout>
            <Seo
                title={"Resume | Mats Voss"}
                description={
                    "This is my personal website that contains my current portfolio & resume. On the Resume page you can see my CV/Resume!"
                }
                image={"https://mats-voss.com/images/web-preview.png"}
            />
            <section className="timelineSection">
                <Nav siteTitle="<Mats>" />
                <div className="Content">
                    <h1 className="heading">Timeline</h1>
                    <article className="descriptionContainer">
                        <p>This and more sections are work in progress.</p>
                        <p>
                            For this section I am planing to create a timeline
                            to show of old and planed updates.
                        </p>
                    </article>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

export default TimeLinePage;
