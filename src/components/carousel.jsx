import React from "react";

<link rel="preload" href="/cesar-saravia-uM6IhU0UZg0-unsplash (1).jpg" as="image" />

function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/cesar-saravia-uM6IhU0UZg0-unsplash (1).jpg?size=large" className="d-block" alt="First slide"
                            loading="eager" style={{ height: "50%", width: "100%", objectFit: "cover" }}  // Adjust height for layout stability

                        />
                    </div>

                </div>

            </div>
        </>
    );
}


export default Carousel;
