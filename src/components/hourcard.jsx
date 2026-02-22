import React from "react";

function Hourcard() {
    return (
        <>
            <button className="btn btn-primary" id="home-button"><a href="/">Home</a></button>
            <h1 id='hourcard-header'>Hours</h1>
            <div className="card" style={{ width: "18rem" }} id="hourcard">
                <div className="card-body-container">
                    <div className="hours" style={{ display: 'flex' }}>
                        <ul id="days-list">
                            <li>Monday  </li>
                            <li>Tuesday</li>
                            <li>Wensday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>


                        </ul>
                        <ul id="hours-list">
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

export default Hourcard;
