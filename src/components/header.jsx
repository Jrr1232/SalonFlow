import React, { useState, useEffect } from "react";


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div>
                <div className="container-fluid" id="booking-button-div">
                    <button id="booking-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >BOOK</button>
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Johannys Unisex</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TREATMENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHOP PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Header;
