import React, { useState, useEffect } from 'react';
import signupFormHandler from '../js/signupFormHandler';
import Cookies from 'js-cookie';

function SignUpForm({ clientType }) {
    const [message, setMessage] = useState(""); // ✅ for showing success/error messages

    const [formState, setFormState] = useState({
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        client_type: clientType
    });

    useEffect(() => {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
        Cookies.set('client_type', clientType, { expires: expirationDate });
    }, [clientType]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (event, type) => {
        event.preventDefault();

        if (type === 'login') {
            loginFormHandler(event, formState); // You must define loginFormHandler elsewhere
        } else {
            const data = await signupFormHandler(event, formState);

            if (data.userData) {
                setMessage(data.message || "User exists. Please log in.");
            } else if (data.newHairClient || data.newWigClient) {
                setMessage("Account created successfully!");
                // Optionally redirect after a short delay:
                setTimeout(() => window.location.href = '/Calendar', 2000);
            } else if (data.error) {
                setMessage(data.message || "Something went wrong.");
            }
        }
    };

    return (
        <form className="form form-signup" onSubmit={(event) => handleSubmit(event, 'signup')}>
            <fieldset>
                <legend id="signup-header">Sign up</legend>
                <div className="signup-form-input-block">
                    <input
                        id="signup-email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        aria-label="Email"
                    />
                </div>
                <div className="input-block">
                    <input
                        id="signup-username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formState.username}
                        onChange={handleChange}
                        required
                        aria-label="Username"
                    />
                </div>
                <div className="input-block-3">
                    <input
                        id="signup-first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formState.first_name}
                        onChange={handleChange}
                        required
                        aria-label="First Name"
                    />
                    <input
                        id="signup-last_name"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formState.last_name}
                        onChange={handleChange}
                        required
                        aria-label="Last Name"
                    />
                </div>
                <div className="input-block">
                    <input
                        id="signup-address"
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formState.address}
                        onChange={handleChange}
                        required
                        aria-label="Address"
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn-signup">CREATE ACCOUNT</button>
            <hr />
            {/* ✅ Display success or error message here */}
            {message && <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{message}</p>}
        </form>
    );
}

export default SignUpForm;
