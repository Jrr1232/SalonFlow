import React from "react"

function Service({ title, subtitle, description }) {

    return (
        <div id="checkout-body">
            <div className="services-checkout-container">
                <ul className="checkout-page-services-list">
                    <li className="checkout-page-service-item">
                        <a href='/'>
                            <div id="service-div">
                                <h1>{title}</h1>
                                <h2>{subtitle}</h2>
                                <p>{description}</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default Service

