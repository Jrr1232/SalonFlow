import React from "react";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">JU</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-lg-3 ">
                            <a className="nav-link" aria-current="page" href="#">Pricing</a>
                            <a className="nav-link " href="#">About</a>
                            <div className="container-fluid" id="logo">
                                <p className="logo-top">Johannys Unisex</p>
                                <img src="/dr-flag.png" alt="Dominican Republic Flag" id="dr-flag" />
                                <p className="logo-bottom">est:1994</p>
                            </div>
                            <li className="nav-item dropdown d-flex align-items-center">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Appointments
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Existing Appointment</a></li>
                                    <li><a className="dropdown-item" href="#">New Appointment</a></li>
                                </ul>
                            </li>
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Locations</a>
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Gallery</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
