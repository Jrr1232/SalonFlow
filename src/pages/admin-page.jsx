import React, { useState } from "react";

const backendUrl = process.env.NODE_ENV === 'production'
    ? 'https://johannysunisex-cdc945aa3db4.herokuapp.com'
    : 'http://localhost:3001';



function AdminPage() {

    const [hairAppointments, setHairAppointments] = useState([])
    const [wigAppointments, setWigAppointments] = useState([])
    const [billing, setBilling] = useState([])
    const appointmentLoader = async () => {

        try {
            const response = await fetch(`${backendUrl}/api/admin`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const appointments = await response.json();
            console.log('Loaded appointments:', appointments);


            setHairAppointments(appointments.hairCustomers)
            setWigAppointments(appointments.wigCustomers)
            setBilling(appointments.bills)
        } catch (error) {
            console.error('Error loading appointments:', error);
        }
    }

    return (
        <>
            <button onClick={appointmentLoader}>Load All Customers</button>

            <div>
                {hairAppointments.map((appointment) => (
                    <ul className="appointment-card">
                        <li key={appointment._id} >{appointment.first_name} {appointment.last_name} | {appointment.client_type} </li>
                    </ul>
                ))}

            </div>
            <div>
                {wigAppointments.map((appointment) => (
                    <ul className="appointment-card">
                        <li key={appointment._id} >{appointment.first_name} {appointment.last_name} | {appointment.client_type} </li>
                    </ul>
                ))}

            </div>
            <div>
                {billing.map((bill) => (
                    <ul className="appointment-card">
                        <li key={bill._id} >{bill.first_name} {bill.last_name} | {bill.client_type} | {bill.appointment_date} | {bill.service_date} </li>
                    </ul>
                ))}

            </div>


        </>

    )


}

export default AdminPage;