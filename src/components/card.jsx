import React from "react";

function Card() {
    return (
        <>
            <div className="card" style={{ width: "17rem" }} id="hourcard">
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
                            <li>9AM - 8PM</li>
                            <li>9AM - 8PM</li>
                            <li>9AM - 8PM</li>
                            <li>9AM - 9PM</li>
                            <li>9AM - 9PM</li>
                            <li>7AM - 10PM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
