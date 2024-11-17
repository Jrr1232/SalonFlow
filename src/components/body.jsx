import React from "react";
import Card from "./card";
import Book from "./book-button";
function Body() {
    return (
        <>
            
            <Card/>
            
            <Book/>
            <div className="container-fluid" id="address">
                <p>Williamsburg</p>
                <p>332 Hooper St, Brooklyn, NY 11211</p>
                <p>+12127806012</p>
            </div>
            
        </>
    );
}

export default Body;
