import React from "react";
import SignUpForm from "../components/signup-form";
import Homebutton from "../components/homebutton";
function SignupPage() {
    return (
        <div id ="signup-page">
                <Homebutton/>
                <div id ="signup-form">
                <SignUpForm/>
                </div>
            
        </div>
    );
}

export default SignupPage;
