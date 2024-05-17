import React from "react";
import blogData from "../data/blog";

function About({ image = "https://via.placeholder.com/215", About }) {
    return (
            <aside>
                <img src={image} alt="blog logo" />
                <p>{About}</p>
            </aside>
        );
}

export default About;