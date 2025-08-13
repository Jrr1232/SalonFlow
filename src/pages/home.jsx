import React from "react";
import Header from '../components/header';
import Carousel from "../components/carousel";
import Body from "../components/body";
import Footer from "../components/footer";
import Scrolltext1 from "../components/scrolltext1";
import Scrolltext2 from "../components/scrolltext2";
import Scrolltext3 from "../components/scrolltext3";

function Home() {
    return (
        <>

            <Header />
            <Carousel />
            <Scrolltext1 />
             <Body />
            <hr id="hours-divider"></hr>

        </>
    );
}

export default Home;
