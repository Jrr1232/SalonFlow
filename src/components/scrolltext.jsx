import React from "react";
function Scrolltext() {
    return (
        <>
            <div id="scroll-container">
                <div className="scroll-track">
                    <span className="scroll-item">
                        📍 332 Hooper St, Brooklyn, NY 11211

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>

                    <span className="scroll-item">
                        📞 (347) 662-7049
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ✂️ Walk-ins Welcome • Hair • Color • Braids • Wigs

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

export default Scrolltext;
