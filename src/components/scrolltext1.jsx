import React from "react";

function Scrolltext1() {
    return (
        <>
            <div className="video-container" id="scroll-container1">
                <video preload="auto" autoPlay muted loop playsInline className="background-video">
                    <source src="\2f42c10f-65f4-4fe4-b48d-4304a0562236.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p id="scroll-text">
                    WIGS WIGS WIGS WIGS WIGS WIGS
                </p>
            </div>
        </>
    );
}


export default Scrolltext1;