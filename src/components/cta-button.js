import React from "react";
import { FaAngleDown } from "react-icons/fa";

import "./cta-button.css";

/**
 *
 * @param {object} data
 * @property {string} data.link
 * @property {boolean} data.external
 * @returns
 */
const CTAButton = ({ data: { link, external } }) => {
    return (
        <button
            className="cta-btn"
            onClick={() => {
                external
                    ? window.open(link, "_blank", "noreferrer")
                    : window.location.replace(link);
            }}
        >
            <FaAngleDown />
        </button>
    );
};

export default CTAButton;
