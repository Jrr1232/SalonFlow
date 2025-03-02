import React from "react";
import SignUpForm from "../components/signup-form";

function WigSignupPage() {
    return (
        <div id="signup-page">
            <div id="signup-form">
                <SignUpForm clientType="wigs" />
            </div>

        </div>
    );
}

export default WigSignupPage;