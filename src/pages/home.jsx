import React from "react";
import Header from '../components/header';
import Carousel from "../components/carousel";
import Body from "../components/body";
import Footer from "../components/footer";
import Login from "../components/login-form";
function Home() {
    return (
        <>

                <Header />
                <Carousel/>
                <Body/>
                <hr id="hours-divider"></hr>
                <Login/>
                <hr id="hours-divider"></hr>
                <Footer/>
                
        </>
    );
}

export default Home;
