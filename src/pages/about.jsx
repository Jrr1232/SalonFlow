import React from "react";
import Header from '../components/header';
function About() {
    return (
        <>
            <button className="btn btn-primary" id="home-button"><a href="/">Home</a></button>
            <div id="aboutpage">
                <div className="card" style={{ width: "17rem" }} id="hourcard">
                    <div className="card-body">
                        <div className="hours" style={{ display: 'flex' }}>
                            <ul id="days-list">
                                <li>Monday  </li>
                                <li>Tuesday</li>
                                <li>Wensday</li>
                                <li>Thursday</li>
                                <li>Friday</li>
                                <li>Saturday</li>


                            </ul>
                            <ul id ="hours-list">
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
            </div>
        </>
    )
}

export default About;