import React, { useState, useEffect } from 'react';

function Offcanvas() {
    return (
        <>

            <button id="booking-button" className="btn btn-link btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Book Appointment
            </button>
            <img src="public\arrow_right_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" id="arrow"></img>


            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Log in</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Returning Clients: log in to your personalized booking experience.                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Create Account
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                {/* Link to Wigs Offcanvas */}
                                <a
                                    className="dropdown-item"
                                    href="#login-card"
                                >
                                    Wigs
                                </a>
                            </li>                            <li><a className="dropdown-item" href="#login-card">Regular</a></li>
                        </ul>
                        <button type="button" className="btn btn-info" id="login" ><a href='#login-card' id="login-link">Log in</a></button>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Offcanvas;