import React from "react";

function Card() {
    return (
        <>
            <div className="card" style={{ width: "17rem" }} id ="hourcard">
                <div className="card-body">
                    <div className="hours" style={{ display: 'flex' }}>
                        <ul>
                            <li>Monday  </li> 
                            <li>Tuesday</li>  
                            <li>Wensday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>

                        </ul>
                        <ul>
                            <li>9:00 AM - 8:00 PM</li> 
                            <li>9:00 AM - 8:00 PM</li>  
                            <li>9:00 AM - 8:00 PM</li>
                            <li>9:00 AM - 9:00 PM</li>
                            <li>9:00 AM - 9:00 PM</li>
                            <li>7:00 AM - 10:00 PM</li>
                        </ul>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Card;
