import React, { useState, useEffect } from 'react';
import Google from './googlesigninbutton';
import signupFormHandler from '../js/signupFormHandler';
import Cookies from 'js-cookie';
import Logo from './logo';

function SignUpForm({ clientType }) {

    const [formState, setFormState] = useState({
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        client_type: clientType
    });
    console.log(clientType)
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
    Cookies.set('client_type', clientType, { expires: expirationDate });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (event, type) => {
        event.preventDefault();
        if (type === 'login') {
            loginFormHandler(event, formState);
        } else {
            signupFormHandler(event, formState);
        }
    };
    return (
        <form className="form form-signup" onSubmit={(event) => handleSubmit(event, 'signup')}>
            <fieldset>
                <Logo />
                <legend id="signup-header">Sign up</legend>
                <div className="input-block-1">
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
            <button type="submit" className="btn-signup">
                CREATE ACCOUNT
            </button>
            <hr />

        </form>
    );
}

export default SignUpForm;