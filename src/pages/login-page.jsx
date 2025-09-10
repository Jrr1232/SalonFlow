import React from "react";
import LoginForm from "../components/login-form";
import Homebutton from "../components/homebutton";
function LoginPage() {
    return (
        <div id="loginPage">
            <Homebutton />
            <div id="loginForm">
            <LoginForm />
            </div>

        </div>
    );
}

export default LoginPage;
