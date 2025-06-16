import React from "react";

function Scrolltext2() {
    return (
        <>
            <div className="video-container" id="scroll-container2">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src="\8a901d2f-71b1-4a5d-a0c7-3fe42986d7b2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p id="scroll-text">
                    TREATMENTS TREAMENTS TREAMENTS
                </p>
            </div>
        </>
    );
}


export default Scrolltext2;