import React, { useState, useEffect } from 'react';
import loginFormHandler from '../js/loginFormHandler';
import Google from './googlesigninbutton';
function Login() {
  const [formState, setFormState] = useState({
    username: '',
    first_name: '',
    last_name: '',
    address: '',
    email: ''
  });



  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  useEffect(() => {
    const switchers = document.querySelectorAll('.switcher');

    function handleSwitcherClick(event) {
      switchers.forEach((item) => item.parentElement.classList.remove('is-active'));
      event.currentTarget.parentElement.classList.add('is-active');
    }

    switchers.forEach((item) => {
      item.addEventListener('click', handleSwitcherClick);

      return () => {
        item.removeEventListener('click', handleSwitcherClick);
      };
    });

    return () => {
      switchers.forEach((item) => {
        item.removeEventListener('click', handleSwitcherClick);
      });
    };
  }, []);

  return (
    <>

      <section className="forms-section">
        <div className="forms">
          <div className="card" id="login-card">
            <form className="form form-login" onSubmit={(event) => loginFormHandler(event, formState)}>
              <fieldset>
                <legend id="signin-header">Sign in</legend>
                <div className="input-block" id="email">
                  <input id="login-email" type="email" name="email" placeholder='Email' onChange={handleChange} required />
                </div>
                <div className="input-block" id="password">
                  <input id="username" type="text" name="username" placeholder='Password' onChange={handleChange} required />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Log in</button>
              <hr></hr>
              <div class="g-signin2" data-onsuccess="onSignIn"></div> <Google />
            </form>
          </div>
          <div className="card" id="signup-card">

            <form className="form form-signup" onSubmit={(event) => signupFormHandler(event, formState)}>
              <fieldset>
                <legend id="signup-header">Sign up</legend>
                <div className="container-fluid">
                <div className="container-fluid" id="name-field">
                  <div className="input-block" id="firstname-form">
                    <input id="signup-first_name" type="text" name="first_name" placeholder='First Name' value={formState.first_name} onChange={handleChange} required />
                  </div>
                  <div className="input-block" id="lastname-form">
                    <input id="signup-last_name" type="text" name="last_name" placeholder='Last Name' value={formState.last_name} onChange={handleChange} required />
                  </div>
                  </div>
                  <div className="input-block" id="username-form">
                    <input id="signup-username" type="text" name="username" value={formState.username} placeholder='Username' onChange={handleChange} required />
                  </div>
                  <div className="input-block" id="email-form">
                    <input id="signup-email" type="email" name="email" placeholder='Email' value={formState.email} onChange={handleChange} required />
                  </div>
                  <div className="input-block" id="address-form">
                    <input id="signup-address" type="text" name="address" placeholder='Address' value={formState.pin} onChange={handleChange} required />
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">Sign Up</button>
              <hr></hr>
              <Google />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
