import React, { useState, useEffect } from 'react';
import Hourslider from '../components/hourslider';
import Cookies from 'js-cookie';
import Homebutton from '../components/homebutton';

function Calendar() {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11 indexed
    const currentYear = today.getFullYear();
    let appointmentDate
    let cookie = Cookies.get(appointmentDate)
    let cookieData = Cookies.get('hour');
    console.log(cookieData)
    let hour = '';
    let day = Cookies.get('appoitmentDate')
    cookieData = Cookies.get('hour');
    if (typeof cookieData === "string") {
        const parts = cookieData.split('"');
        if (parts.length > 3) {
            hour = parts[3]; // Safely extract the 3rd index if it exists
        } else {
            hour = 'Invalid hour format'; // Handle the case where the split did not return expected data
        }
    } else {
        hour = 'No hour data found'; // Handle if cookieData is not a string or is missing
    }
    console.log(hour)
    if (hour === "" || hour === "undefined" || hour === undefined) {
        hour = 'and available hour.';
    } else if (hour && typeof hour === "string") {

        hour = "@" + " " + Cookies.get('hour').split('"')[3]
    }

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
        Cookies.set('appoitmentDate', appointmentDate, { expires: expirationDate });
        setDays(appointmentDate); // Update state with the selected date
        return appointmentDate

    }




    return (
        <>
            <Homebutton />
            <p id="calendar-title">Book a Date</p>
            <div id="calendar-container">
                <table id="calendar" bgcolor="lightgrey"
                    cellSpacing="21" cellPadding="21">
                    <caption id="table-caption" align="top">

                        <button onClick={onClickDecreaseMonth} disabled={isDisabled} >previous month</button>
                        {monthNames[Month] + " " + currentYear}
                        <button onClick={onClickIncrementMonth} >next month</button>
                        <p id="scheduled-day">Appointment Date: {days || 'Select an available date'}, {hour}.</p>
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
                <Hourslider id="hourslider" />


            </div>
            <button className="addtocalendar-button" onClick={() => {
                alert(`${days} ${hour} added to calendar`);
                window.location.href = '/Services';
            }}>
                <a id="addtocalendar" href="/Services">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
                    <span className="lable">Add to Calendar</span></a>
            </button>
        </>

    )
}


export default Calendar