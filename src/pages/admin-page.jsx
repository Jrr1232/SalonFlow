import React, { useState } from "react";
import Homebutton from "../components/homebutton";
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
            <Homebutton />
            <button id ="appointments-button" onClick={appointmentLoader}>Load All Customers</button>
            <section id="admin-header">

                <div id="billing-section">
                    {billing.map((bill) => (
                        <ul className="appointment-card">
                            <li key={bill._id} >{bill.first_name} {bill.last_name} | {bill.client_type} | {bill.appointment_date} | {bill.service_date} | {bill.service_name} </li>
                        </ul>
                    ))}

                </div>
            </section>


        </>

    )


}

export default AdminPage;