import React from "react";
import Header from '../components/header';
import Scrolltext from "../components/scrolltext";
import Offcanvas from "../components/offcanvas";

function Home() {
    return (
        <>
            <Scrolltext />
            <div className="hero">
                <Header />
                <Offcanvas />
            </div>

        </>
    );
}

export default Home;
