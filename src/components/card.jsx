import React from "react";

function Card() {
    return (
        <>

            <div className="card" id="hourcard">
                <div className="card-body">
                    <div className="hours" style={{ display: 'flex' }}>
                        <ul id='days-list'>
                            <li className='days-list'>Monday  </li>
                            <li className='days-list'>Tuesday</li>
                            <li className='days-list'>Wensday</li>
                            <li className='days-list'>Thursday</li>
                            <li className='days-list'>Friday</li>
                            <li className='days-list'>Saturday</li>

                        </ul>
                        <ul id='hours-list'>
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
