import React from "react";
import Hourcard from "../components/hourcard";
function About() {
    return (
        <>
            <Hourcard />
            <h1 id ='address'>
                <a href="https://maps.google.com/?q=332+Hooper+St+Brooklyn+NY+11211" target="_blank">
                    332 Hooper St, Brooklyn, NY 11211
                </a>
            </h1>

            <h2 id ='phone'>
                <a href="tel:+13476627049">(347) 662-7049</a>
            </h2>
        </>
    )
}

export default About;