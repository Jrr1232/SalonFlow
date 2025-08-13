import React from "react";
function Scrolltext1() {
    return (
        <>
            <div id="scroll-container1">
                <div className="scroll-track">
                    <span className="scroll-item">
                        “My childhood salon — they are the best!” - Shameeka R.
                        <img
                            src="public/crown smaller.png"
                            alt="star"
                            className="review-icon"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        "Highly recommend this salon." - Yayi U.
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>

                    <span className="scroll-item">
                        20+ years experience
                        <img
                            src="public/crown smaller.png"
                            alt="star"
                            className="review-icon"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Wigs | Blowouts | Cuts | Color
                        <img
                            src="public/crown smaller.png"
                            alt="star"
                            className="review-icon"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    {/* Repeat to create seamless scroll */}
                    <span className="scroll-item">
                        “My childhood salon — they are the best!” - Shameeka R.
                        <img
                            src="public/crown smaller.png"
                            alt="star"
                            className="review-icon"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        "Highly recommend this salon." - Yayi U.
                        <img
                            src="public/crown smaller.png"
                            alt="star"
                            className="review-icon"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>
        </>
    );
}

export default Scrolltext1;
