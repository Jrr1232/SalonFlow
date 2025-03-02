import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

function HairCheckout() {
    const [cart, setCart] = useState([]);
    const navigateTo = useNavigate();

    const services = [
        {
            name: 'Color/Highlights',
            price: 5,
            code: 1
        },
        {
            name: 'Blow dry with Hair Styling',
            price: 120,
            code: 2
        },
        {
            name: 'Blow dry',
            price: 5,
            code: 3
        },
        {
            name: 'Hair Styling',
            price: 5,
            code: 4
        },
        {
            name: 'Wash',
            price: 5,
            code: 5
        },
    ];

    const email = Cookies.get('email');
    const firstName = Cookies.get('first_name');

    const body = {
        cart: cart,
        email: email,
        first_name: firstName
    };

    const addServiceToCart = (service) => {
        setCart([...cart, service]);
    };

    const removeServiceFromCart = (service) => {
        const updatedCart = cart.filter(item => item.code !== service.code);
        setCart(updatedCart);
    };

    const handleCheckout = async () => {
        
        
        const developmentUrl = 'http://localhost:3001';
        const backendUrl = process.env.REACT_APP_API_URL;

        try {
            const response = await fetch(`/api/checkout`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                alert("Successfully added to Checkout");
                setCart([]);

            } else {
                alert("Failed to add to checkout");
            }
        } catch (error) {
            console.error("Error during fetch", error);
        }
    };
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);



    return (
        <>
            <a id ="home-button" href="/">
                <p id="home-button"> Home </p>
            </a>
            <p id="services-title">Hair Services</p>
            <hr id="services-hr" />
            <div>
                <div>
                    <ul id="services-list">
                        {services.map(service => (
                            <li id ="cart" key={service.name}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                addServiceToCart(service);
                                            } else {
                                                removeServiceFromCart(service);
                                            }
                                        }}
                                    />
                                    {service.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {cart.length > 0 && (
                        <ul id="shopping-cart">
                            <p>Total Price: ${totalPrice}</p>
                            {cart.map((item, index) => (
                                <li key={index}>{item.name}: ${item.price}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <button id="checkout-button" onClick={handleCheckout}>Checkout</button>


        </>
    );
}

export default HairCheckout;
