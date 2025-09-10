import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Header from '../components/header';
function Services() {

    const [hasAppointment, sethasAppointment] = useState(false);

    useEffect(() => {
        const appointmentDate = Cookies.get('appointmentDate'); // Make sure this matches your actual cookie key
        if (appointmentDate) {
            sethasAppointment(true);
        }
    }, []);

    const [cart, setCart] = useState([]);
    const navigateTo = useNavigate();
    const client_type = Cookies.get('client_type');
    const email = Cookies.get('email');
    const firstName = Cookies.get('first_name');
    let appointmentDate = Cookies.get('appointmentDate');
    let hour = Cookies.get('hour');
    if (hour) {
        hour = hour.split('"');
        hour = hour[3]; // Extract the hour from the cookie
    }
    appointmentDate = appointmentDate + " " + "@" + " " + hour; // Combine date and hour
    const body = {
        cart: cart,
        email: email,
        first_name: firstName,
        appointmentDate: appointmentDate,
        client_type: client_type
    };

    const addServiceToCart = (service) => {
        setCart([...cart, service]);
    };

    const removeServiceFromCart = (service) => {
        const updatedCart = cart.filter(item => item.code !== service.code);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const handleCheckout = async (e) => {

        if (!hasAppointment) {
            e.preventDefault(); // prevent navigation
            alert("Please use calendar to book an appointment.");
            navigateTo('/calendar');
        }

        else {


            const backendUrl = process.env.NODE_ENV === 'production'
                ? 'https://johannysunisex-cdc945aa3db4.herokuapp.com'
                : 'http://localhost:3001';

            try {
                const response = await fetch(`${backendUrl}/api/checkout`, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: { "Content-Type": "application/json" }
                });

                if (response.ok) {
                    alert("Appointment booked at " + " " + appointmentDate);
                    setCart([]);

                } else {
                    alert("Failed to add to checkout");
                }
            } catch (error) {
                console.error("Error during fetch", error);
            }
        };

    }



    return (

        <>

            <div className='hero'>
                <Header />
                <div className="services-container">
                    <div className="hair-services">
                        <div id="Cuts">
                            <a href='/'>

                                <h1>Cuts</h1>
                                <h1>60 mins (female & men)</h1>
                                <h2>Great haircuts with precision, style, and care—tailored just for you.</h2>
                            </a>
                        </div>
                        <div id="Blowout">
                            <a href='/'>

                                <h1>Blowout</h1>
                                <h1>60 mins</h1>
                                <h2>Sleek, smooth, and full of volume—perfect for any occasion.</h2>
                            </a>
                        </div>
                        <a href='/'>
                            <div id="Color">
                                <h1>Color</h1>
                                <h2>From bold transformations to subtle highlights, let your hair shine.</h2>
                            </div>
                        </a>
                        <div id="Extensions">
                            <a href='/'>

                                <h1>Extensions</h1>
                                <h2>Get the length, fullness, and look you’ve always dreamed of.</h2>
                            </a>
                        </div>
                    </div>

                    <div className="wig-services">
                        <div id="Cleaning">
                            <a href='/'>

                                <h1>Wig Washing & Deep Conditioning</h1>
                                <h2>Refresh your wig’s softness and sheen with a nourishing, pro-grade spa treatment.</h2>
                            </a>
                        </div>
                        <div id="Coloring">
                            <a href='/'>

                                <h1>Color Refresh & Highlights</h1>
                                <h2>Brighten, tone, or transform—expert color for a fresh, crisp look.</h2>
                            </a>
                        </div>
                        <div id="Styling">
                            <a href='/'>

                                <h1>Cut, Design & Styling</h1>
                                <h2>Custom trims, layers, and styling tailored to your face and vibe.</h2>
                            </a>
                        </div>
                        <div id="Ventilation">
                            <a href='/'>

                                <h1>Hand-Tied Ventilation</h1>
                                <h2>For an ultra-realistic hairline and natural parting that fools the eye.</h2>
                            </a>
                        </div>
                        <div id="FitAdjust">
                            <a href='/'>

                                <h1>Cap Modifications & Fit Adjustment</h1>
                                <h2>Perfect size, comfort, and security—your wig, reimagined to fit flawlessly.</h2>
                            </a>
                        </div>
                        <div id="LaceRepair">
                            <a href='/'>

                                <h1>Lace & Structural Repair</h1>
                                <h2>Mend, reinforce, and revitalize—let your wig feel and look brand new.</h2>
                            </a>
                        </div>
                    </div>

                </div>

            </div >

        </>
    )

}

export default Services;