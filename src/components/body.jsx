import React from "react";
import Card from "./card";
import Offcanvas from "./offcanvas";

function Body() {
    return (
        <>


            <Card />
            <Offcanvas />
            <hr id="hours-divider"></hr>
            <div className="container-fluid" id="address">
                <p>Williamsburg</p>
                <p>332 Hooper St, Brooklyn, NY 11211</p>
                <p><a href="tel:+12127806012" id="phone">+1-212-780-6012</a></p>
            </div>

        </>
    );
}

export default Body;
