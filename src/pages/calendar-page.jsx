import React, { useState, useEffect } from 'react';
import Hourslider from '../components/hourslider';
import Cookies from 'js-cookie';
import Homebutton from '../components/homebutton';

function Calendar() {



    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11 indexed
    const currentYear = today.getFullYear();
    let hour = '';
    let hourCookie = Cookies.get('hour');
    if (hourCookie == undefined) {
        hourCookie = JSON.stringify({ hour: '7:00 AM' })
    }; // Default value if cookie is not set
    let parsedHour = JSON.parse(hourCookie);  // Parse it into an object

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();

    if (firstDay === 0) {
        firstDay = 7;
    }

    const firstDate = new Date().getDate();
    const previousDays = [];
    const afterDays = [];

    for (let i = firstDate; i >= 0; i--) {
        previousDays.push(i)
    }

    for (let i = 1; i < 31; i++) {
        afterDays.push(i)

    }

    const [Month, setMonth] = useState(currentMonth); // State initialized to current month index
    const [days, setDays] = useState(''); // State to track the selected day
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (monthNames[Month] === "January") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [Month]); // Dependency array to trigger when `Month` changes


    const onClickIncrementMonth = () => {

        let newMonth = (Month + 1) % 12; // Increment month and wrap around after December
        setMonth(newMonth); // Update state

    };

    const onClickDecreaseMonth = () => {

        let newMonth = (Month - 1) % 12; // Increment month and wrap around after December
        setMonth(newMonth); // Update state

    };


    const generateDays = (month) => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, month, 1).getDay() || 7;
        const rows = [];
        let currentDay = 0;
        let week = Array(firstDay - 1).fill(null);
        while (currentDay <= daysInMonth) {
            week.push(currentDay);
            if (week.length === 7) {
                rows.push(week);
                week = [];
            }
            currentDay++;
        }

        if (week.length > 0) {
            rows.push(week);
        }
        return rows;


    };

    const rows = generateDays(Month);


    const generateAppointment = async (day, month, year) => {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
        const appointmentDate = month + " " + day + " " + year;
        Cookies.set('appointmentDate', appointmentDate, { expires: expirationDate });
        setDays(appointmentDate); // Update state with the selected date
        return appointmentDate

    }




    return (
        <>
            <nav id="navbar-services-page" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Johanny's Unisex
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {/* Left side links */}
                        <div className="navbar-nav" id="header-page">
                            <a className="nav-link" href="/">
                                Appointments
                            </a>
                            <a className="nav-link active" href="/Services">
                                Services
                            </a>
                            <a className="nav-link" href="/Gallery">
                                Gallery
                            </a>
                            <a className="nav-link" href="/About">
                                Hours
                            </a>
                        </div>
                    </div>
                </div>


            </nav>
            <div id="calendar-title">Book an Appointment</div>
            <div id="calendar-body">
                <div id="calendar-container">
                    <table id="calendar"
                        cellSpacing="21" cellPadding="21">
                        <caption id="table-caption" align="top">

                            <button onClick={onClickDecreaseMonth} disabled={isDisabled} >previous month</button>
                            {monthNames[Month] + " " + currentYear}
                            <button onClick={onClickIncrementMonth} >next month</button>
                            <p id="scheduled-day">Appointment Date: {days || 'Select an available date'} @ {parsedHour.hour}</p>
                        </caption>
                        <thead>
                            <tr>
                                <th id="weekdays">Sun</th>
                                <th id="weekdays">Mon</th>
                                <th id="weekdays">Tue</th>
                                <th id="weekdays">Wed</th>
                                <th id="weekdays">Thu</th>
                                <th id="weekdays">Fri</th>
                                <th id="weekdays">Sat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                            {rows.map((week, index) => (
                                <tr key={index}>
                                    {week.map((day, idx) => (
                                        <td key={idx} id={day} onClick={() => generateAppointment(day, monthNames[Month], currentYear)} ><a href="#" id="days">
                                            {day || '\u00A0'}</a>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="addtocalendar-button" onClick={() => {

                        window.location.href = '/services/hair';
                    }}>
                        <a id="addtocalendar" href="/services/hair">
                            <span className="label">Book Appointment</span></a>
                    </button>


                </div>
                <Hourslider id="hourslider" />
            </div>

        </>

    )
}


export default Calendar