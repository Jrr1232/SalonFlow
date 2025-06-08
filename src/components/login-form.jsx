import React, { useState, useEffect } from 'react';
import loginFormHandler from '../js/loginFormHandler';
import Logo from './logo';

function LoginForm() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formState);
        loginFormHandler(event, formState);

    };

    // If the switcher functionality is necessary
    useEffect(() => {
        const switchers = document.querySelectorAll('.switcher');

        const handleSwitcherClick = (event) => {
            switchers.forEach((item) =>
                item.parentElement.classList.remove('is-active')
            );
            event.currentTarget.parentElement.classList.add('is-active');
        };

        switchers.forEach((item) => item.addEventListener('click', handleSwitcherClick));

        return () => {
            switchers.forEach((item) =>
                item.removeEventListener('click', handleSwitcherClick)
            );
        };
    }, []);

    return (
        <form className="form form-login" onSubmit={handleSubmit}>
            <fieldset>
                <Logo />
                <legend id="signin-header">Log In</legend>
                <div className="input-block">
                    <input
                        id="login-email"
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
                        id="login-username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formState.username}
                        onChange={handleChange}
                        required
                        aria-label="Username"
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn-login">
                Log in
            </button>
            <hr />
        </form>

    );
}

export default LoginForm;
