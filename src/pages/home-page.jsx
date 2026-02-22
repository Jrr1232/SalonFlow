import React from "react";
import Header from '../components/header';
import Scrolltext from "../components/scrolltext";
import Offcanvas from "../components/offcanvas";

function Home() {
    return (
        <>
            <Header />

            <div className="hero-image">
                <div className="overlay"></div>

                <div className="hero-text">
                    <p id="hero-text-top">Johanny's</p>
                    <p id="hero-text-bottom">Unisex</p>
                </div>
            </div>
            <section className="about">
                <p>
                    For over 20 years, Johanny has been providing expert haircuts, color, and treatments
                    in a warm, welcoming environment. We make every client look and feel their best.
                </p>
            </section>
            <Scrolltext />
            <Offcanvas />


        </>
    );
}

export default Home;
