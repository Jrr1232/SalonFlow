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
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid" id="navbar-header">
                <a className="navbar-brand" href="#">JU</a>
                <div className="navbar-nav col-lg-3">
                    <div
                        className={`container-fluid ${isScrolled ? "hidden" : ""}`}
                        id="logo"
                    >
                        <p className="logo-top">Johannys Unisex</p>
                        <img
                            src="/dr-flag.png"
                            alt="Dominican Republic Flag"
                            id="dr-flag"
                        />
                        <p className="logo-bottom">est:1994</p>
                    </div>
                </div>
                <button
                    id="cart-button-header"
                    className="btn btn-lg"
                    type="button"
                > <a href="/services/hair" id="cart"><img src="public\shopping_cart_checkout_20dp_1F1F1F_FILL0_wght400_GRAD0_opsz20 (1).png" alt="Cart Icon" id="cart-icon-header"></img>
                        <p id="menu-header">Cart</p></a>
                </button>
                <button
                    id="booking-button-header"
                    className="btn btn-lg"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <span className="navbar-toggler-icon" id="header-menu-btn"></span>
                    <p id="menu-header">More info</p>
                </button>

            </div>
        </nav>
    );
}

export default Header;
