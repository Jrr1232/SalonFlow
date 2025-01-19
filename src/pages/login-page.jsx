import React from "react";
import LoginForm from "../components/login-form";
import Homebutton from "../components/homebutton";
function LoginPage() {
    return (
        <>
            <Homebutton />
            <div id="loginPage">
                <div id="loginForm">
                    <LoginForm />
                </div>

            </div>
        </>
    );
}

export default LoginPage;
