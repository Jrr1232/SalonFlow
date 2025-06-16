import React from "react";

function Scrolltext3() {
    return (
        <>
            <div className="video-container" id="scroll-container3">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src="\2f42c10f-65f4-4fe4-b48d-4304a0562236.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p id="scroll-text">
                    HAIRCUTS HAIRCUTS HAIRCUTS HAIRCUTS
                </p>
            </div>
        </>
    );
}


export default Scrolltext3;