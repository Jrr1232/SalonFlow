import React from "react";
import Homebutton from "../components/homebutton";
import Service from "../components/service";

const services = [
    {
        id: "Cuts",
        title: "Cuts",
        subtitle: "60 mins (female & men)",
        description: "Great haircuts with precision, style, and care—tailored just for you."
    },
    {
        id: "Blowout",
        title: "Blowout",
        subtitle: "60 mins",
        description: "Sleek, smooth, and full of volume—perfect for any occasion."
    },
    {
        id: "Color",
        title: "Color",
        description: "From bold transformations to subtle highlights, let your hair shine."
    },
    {
        id: "Extensions",
        title: "Extensions",
        description: "Get the length, fullness, and look you’ve always dreamed of."
    },
    // Wig services
    {
        id: "Cleaning",
        title: "Wig Washing & Deep Conditioning",
        description: "Refresh your wig’s softness and sheen with a nourishing, pro-grade spa treatment."
    },
    {
        id: "Coloring",
        title: "Color Refresh & Highlights",
        description: "Brighten, tone, or transform—expert color for a fresh, crisp look."
    },
    {
        id: "Styling",
        title: "Cut, Design & Styling",
        description: "Custom trims, layers, and styling tailored to your face and vibe."
    },
    {
        id: "Ventilation",
        title: "Hand-Tied Ventilation",
        description: "For an ultra-realistic hairline and natural parting that fools the eye."
    },
    {
        id: "FitAdjust",
        title: "Cap Modifications & Fit Adjustment",
        description: "Perfect size, comfort, and security—your wig, reimagined to fit flawlessly."
    },
    {
        id: "LaceRepair",
        title: "Lace & Structural Repair",
        description: "Mend, reinforce, and revitalize—let your wig feel and look brand new."
    }
];




function Checkout() {
    return (
        <>
            <div id="checkout-page" className="bg-image">
                <Homebutton />
                <div id="checkout-body">
                    <div className="services-checkout-container">
                        <ul className="checkout-page-services-list">
                            {services.map((s, index) => (
                                <li className="checkout-page-service-item" key={index}>
                                    <a href='/'>
                                        <Service
                                            title={s.title}
                                            subtitle={s.subtitle}
                                            description={s.description}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout;