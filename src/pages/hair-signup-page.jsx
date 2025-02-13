import React from "react";
import SignUpForm from "../components/signup-form";

function HairSignupPage() {
    return (
        <div id="signup-page">
            <div id="signup-form">
                <SignUpForm clientType="hair" />
            </div>

        </div>
    );
}

export default HairSignupPage;