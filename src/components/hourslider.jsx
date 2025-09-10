import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

function Hourslider() {
    const [time, setTime] = useState(''); // State to track the selected day
    const [selectedHour, setSelectedHour] = useState(null); // Track the selected hour

    const onClickSaveHour = async (hour) => {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
        console.log(hour)
        Cookies.set('hour', JSON.stringify(hour), { expires: expirationDate });
        setTime(hour)
        window.location.reload()


    }

    let hours = []

    for (var i = 7; i < 13; i++) {
        let hour = i + ":00" + " " + "AM"
        hours.push(hour);
    }

    for (var i = 1; i < 11; i++) {
        let hour = i + ":00" + " " + "PM"
        hours.push(hour);
    }


    return (
        <>
            <div id="hour-container">
                <ul id="hours-list-container">
                    {hours.map((hour) => (
                        <li id="hours-list" key={hour}><a href="#" onClick={() => onClickSaveHour({ hour })}>{hour}</a></li>
                    ))}
                </ul>
            </div>



        </>
    )

}

export default Hourslider;