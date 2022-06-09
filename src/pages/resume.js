import React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav/nav";
import Footer from "../components/footer";

const ResumePage = () => {
    return (
        <Layout>
            <Nav siteTitle={"<Mats>"} />
            <h1
                style={{
                    height: "65.1vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                }}
            >
                Coming Soon...
            </h1>
            <Footer />
        </Layout>
    );
};

export default ResumePage;
