import React from "react";
import Scrolltext1 from "./scrolltext1";
import Scrolltext2 from "./scrolltext2";
import Card from "./card";
function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/cesar-saravia-uM6IhU0UZg0-unsplash.jpg" className="d-block w-100 h-50" alt="First slide" />
                    </div>

                </div>

            </div>
        </>
    );
}


export default Carousel;
