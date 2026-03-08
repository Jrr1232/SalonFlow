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
                    <div className="container-fluid" id="booking-button-div">
                        <button id="booking-button-hero" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >BOOK APPOINTMENT</button>
                    </div>
                </div>
                <section className="about">

                </section>
                <Scrolltext />
                <Offcanvas />


            </>
        );
    }

export default Home;
