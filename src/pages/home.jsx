import React from "react";
import Header from '../components/header';
import Carousel from "../components/carousel";
import Body from "../components/body";
import Carousel2 from "../components/carousel2";
import Footer from "../components/footer";
function Home() {
    return (
        <>
           
                <Header />
                <Carousel/>
                <Body/>
                <Carousel2/>
                <Footer/>
                
        </>
    );
}

export default Home;
