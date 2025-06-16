const router = require("express").Router();
const Hair_client = require("../../client/models/hair_client");
const Wig_client = require("../../client/models/wig_client");
const Billing = require("../../client/models/billing");
const Cookies = require('js-cookie');
const cookie = require("express-session/session/cookie");

router.post("/", async (req, res) => {
    try {
        const cart = req.body.cart;
        const hour = req.body.hour;
        const appointmentDate = req.body.appointmentDate;
        // Ensure hour is defined and split correctly
        let hourFormatted = "";
        if (hour) {
            const arr = hour.split('"');
            hourFormatted = arr[3];
        }




        const billPromises = cart.map(async (item) => {
            const { name, price, code } = item;

            let userData = await Hair_client.findOne({
                where: { email: req.body.email }
            });

            if (!userData) {
                userData = await Wig_client.findOne({
                    where: { email: req.body.email }
                });
            }

            if (userData) {
                const { address, first_name, last_name, client_id, client_type } = userData;

                return Billing.create({
                    client_id,
                    first_name,
                    last_name,
                    address,
                    email: req.body.email,
                    service_name: name,
                    service_code: code,
                    price,
                    client_type: client_type,
                    appointment_date: appointmentDate
                });
            } else {
                throw new Error('Client not found');
            }
        });

        const billData = await Promise.all(billPromises);


        res.status(200).json({ message: 'Billing records created successfully' });
    } catch (err) {
        console.error("Error in /api/checkout route:", err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

module.exports = router;