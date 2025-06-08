import React from "react";
import SignUpForm from "../components/signup-form";
import Homebutton from "../components/homebutton";

function WigSignupPage() {
    return (
        <div id="signup-page">
            <Homebutton />

            <div id="signup-form">
                <SignUpForm clientType="wigs" />
            </div>

        </div>
    );
}

export default WigSignupPage;