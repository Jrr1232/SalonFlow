import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function HairCheckout() {
    const [hasAppointment, setHasAppointment] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const navigateTo = useNavigate();

    // ✅ Check if appointment exists
    useEffect(() => {
        const appointmentDate = Cookies.get("appointmentDate");
        if (appointmentDate) setHasAppointment(true);
    }, []);

    // ✅ Services list
    const services = [
        { name: "Cuts", price: 60, code: 1 },
        { name: "Color/Highlights", price: 120, code: 2 },
        { name: "Blow dry", price: 50, code: 3 },
        { name: "Hair Styling", price: 80, code: 4 },
        { name: "Wash", price: 20, code: 5 },
    ];

    // ✅ Cookie data
    const client_type = Cookies.get("client_type");
    const email = Cookies.get("email");
    const firstName = Cookies.get("first_name");
    let appointmentDate = Cookies.get("appointmentDate");
    let hour = Cookies.get("hour");

    if (hour) {
        hour = hour.split('"')[3]; // Extract hour
    }
    appointmentDate = appointmentDate ? `${appointmentDate} @ ${hour}` : "";

    // ✅ Add/remove services
    const addServiceToCart = (service) => {
        setCart((prev) => [...prev, service]);
        setCartOpen(true); // 👈 opens cart right away

    };

    const removeServiceFromCart = (service) => {
        setCart((prev) => prev.filter((item) => item.code !== service.code));
    };

    // ✅ Total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    // ✅ Checkout
    const handleCheckout = async (e) => {
        if (!hasAppointment) {
            e.preventDefault();
            alert("Please use calendar to book an appointment.");
            navigateTo("/calendar");
            return;
        }

        const body = {
            cart,
            email,
            first_name: firstName,
            appointmentDate,
            client_type,
        };

        const backendUrl =
            process.env.NODE_ENV === "production"
                ? "https://johannysunisex-cdc945aa3db4.herokuapp.com"
                : "http://localhost:3001";

        try {
            const response = await fetch(`${backendUrl}/api/checkout`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                alert("Appointment booked at " + appointmentDate);
                setCart([]);
            } else {
                alert("Failed to add to checkout");
            }
        } catch (error) {
            console.error("Error during fetch", error);
        }
    };

    console.log(cartOpen)

    return (
        <>
            {/* ✅ Navbar */}
            <nav id="navbar-services-page" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        JS
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {/* Left side links */}
                        <div className="navbar-nav" id="header-page">
                            <a className="nav-link" href="/">
                                Appointments
                            </a>
                            <a className="nav-link active" href="/Services">
                                Services
                            </a>
                            <a className="nav-link" href="/Gallery">
                                Gallery
                            </a>
                            <a className="nav-link" href="/About">
                                Hours
                            </a>
                        </div>

                        {/* Right side cart */}
                        <div className="ms-auto">
                            <ul className="navbar-nav">
                                <li className={`nav-item dropdown`}>                                    <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded={cartOpen ? "true" : "false"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCartOpen((prev) => !prev);
                                    }}
                                >
                                    <img
                                        src="/shopping-cart.png"
                                        alt="cart"
                                        id="cart-icon"
                                        style={{ width: "20px" }}
                                    />
                                </a>
                                    <ul
                                        className={`dropdown-menu dropdown-menu-end ${cartOpen ? "show" : ""}`}
                                        aria-labelledby="navbarDropdown"

                                    >
                                        {cart.length === 0 ? (
                                            <li>
                                                <span className="dropdown-item">Cart is empty</span>
                                            </li>
                                        ) : (
                                            cart.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="dropdown-item">
                                                        {item.name} - ${item.price}{" "}
                                                        <button
                                                            className="btn btn-sm btn-danger ms-2"
                                                            onClick={() => {
                                                                removeServiceFromCart(item);
                                                            }}

                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                </li>
                                            ))
                                        )}
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <span className="dropdown-item">
                                                Total: ${totalPrice}
                                            </span>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item btn btn-primary"
                                                onClick={handleCheckout}
                                            >
                                                Checkout
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </nav >

            {/* ✅ Services List */}
            < div id="services-page-container" >
                <h1>Services</h1>
                {
                    services.map((service) => (
                        <div
                            key={service.code}
                            className="service-card"
                            onClick={(e) => {
                                e.preventDefault();
                                addServiceToCart(service);
                                setCartOpen(true);

                            }}
                            style={{ cursor: "pointer", marginBottom: "1rem" }}
                        >
                            <h2>{service.name}</h2>
                            <p>${service.price}</p>
                        </div>
                    ))
                }
            </div >

        </>
    );
}

export default HairCheckout;

