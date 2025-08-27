import React from "react";
function Scrolltext1() {
    return (
        <>
            <div id="scroll-container1">
                <div className="scroll-track">
                    <span className="scroll-item">
                        Johanny's Unisex Salon

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>

                    <span className="scroll-item">
                        20+ years experience
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Wigs | Blowouts | Cuts | Color

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    {/* Repeat to create seamless scroll */}
                    <span className="scroll-item">
                        Johanny's Unisex Hair Salon
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Wigs | Blowouts | Cuts | Color

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>
        </>
    );
}

export default Scrolltext1;
