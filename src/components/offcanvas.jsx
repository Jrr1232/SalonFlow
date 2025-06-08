import React, { useState, useEffect } from 'react';
import LoginForm from './login-form';
import SignUpForm from './signup-form';

function Offcanvas() {
    return (
        <>
            <button id="booking-button" className="btn btn-link btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Book an Appointment
            </button>
            <img src="/arrow_right_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" id="arrow"></img>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
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
                            <a href="/signup/wig" className="dropdown-item text-decoration-none ">
                                <li>Wigs</li>
                            </a>
                            <a href="/signup/hair" className="dropdown-item text-decoration-none">
                                <li>Regular</li>
                            </a>
                        </ul>
                        <a href="/login" className="btn btn-info" id="loginButton">
                            Log in
                        </a>
                        <h5 id="menu-title">Menu</h5>
                        <ul id="services">
                            <li><a href="/login">Color/Highlights</a> <span className="price">$50</span></li>
                            <li><a href="/login">Blow dry</a> <span className="price">$80</span></li>
                            <li><a href="/login">Hair Cut</a> <span className="price">$70</span></li>
                            <li><a href="/login">Wash</a> <span className="price">$50</span></li>
                            <li><a href="/login">Extensions</a> <span className="price">$100</span></li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Offcanvas;