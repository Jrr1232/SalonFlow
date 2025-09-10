import React from "react";
import SignUpForm from "../components/signup-form";
import Homebutton from "../components/homebutton";
function HairSignupPage() {
    return (
        <div id="signup-page">
            <Homebutton className="homebutton" />
            <div id="signup-form">
            <SignUpForm clientType="hair" />
            </div>
        </div>
    );
}

export default HairSignupPage;