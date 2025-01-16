import React from "react";
import SignUpForm from "../components/signup-form";
import Homebutton from "../components/homebutton";
function WigSignupPage() {
    return (
        <>
            <Homebutton />
            <div id="signup-page">

                <div id="signup-form">
                    <SignUpForm />
                </div>

            </div>


        </>
    );
}

export default WigSignupPage;
