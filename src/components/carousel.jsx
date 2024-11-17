import React from "react";

function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="public\cesar-saravia-uM6IhU0UZg0-unsplash.jpg" className="d-block w-100 h-50" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="public\rosa-rafael-acJTuAzH9RQ-unsplash.jpg" className="d-block w-100 h-50" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="public\obi-pixel9propics-_llKj6qOuZw-unsplash.jpg" className="d-block w-100 h-50" alt="Third slide" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
