import React from "react";
import Header from '../components/header';
import Carousel from "../components/carousel";
import Body from "../components/body";
import Carousel2 from "../components/carousel2";
import Footer from "../components/footer";
import Offcanvas from "../components/offcanvas";
import Login from "../components/login-form";
function Home() {
    return (
        <>
           
                <Header />
                <Carousel/>
                <Body/>
                <Carousel2/>
                <hr id="hours-divider"></hr>
                <Login/>
                <hr id="hours-divider"></hr>
                <Footer/>
                
        </>
    );
}

export default Home;
