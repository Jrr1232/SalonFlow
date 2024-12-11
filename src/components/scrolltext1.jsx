import React from "react";

function Scrolltext1() {
    return (
        <>
            <div className="video-container" id="scroll-container1">
                <video autoPlay muted loop className="background-video">
                    <source src="/Untitled.mp4" type="video/mp4" />
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