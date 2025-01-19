import React, { useState, useEffect } from 'react';
import Google from './googlesigninbutton';
import WigsignupFormHandler from './js/wigSignupFormHandler';
import HairsignupFormHandler from './js/hairSignupFormHandler'


function SignUpForm() {

    const [formState, setFormState] = useState({
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (event, type) => {
        event.preventDefault();

        const path = window.location.pathname; // "/signup/wig"
        const segments = path.split('-');
        const page = segments[0];
        console.log(page)

        if (page === '/wig') {
            WigsignupFormHandler(event, formState)

        }
        else {
            HairsignupFormHandler(event, formState)
        }

    };
    return (
        <div className="card" id="signup-card">
            <form className="form form-signup" onSubmit={(event) => handleSubmit(event, formState)}>
                <fieldset>
                    <legend id="signup-header">Sign up</legend>
                    <div className="input-block">
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
                    </div>
                    <div className="input-block">
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
                    <div className="input-block">
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
                <button type="submit" className="btn-signup">
                    Sign Up
                </button>
                <hr />
                <Google />
            </form>
        </div>
    );
}

export default SignUpForm;
