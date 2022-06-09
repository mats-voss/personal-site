import React from "react";
import { Helmet } from "react-helmet";

function Seo({ title, description, image }) {
    return (
        <Helmet
            title={title}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: "Mats Voss",
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
            ]}
        >
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/SebastianAigner/twemoji-amazing@1.0.0/twemoji-amazing.css"
            />
        </Helmet>
    );
}

export default Seo;
