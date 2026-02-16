
const router = require("express").Router();
const Hair_client = require("../../client/models/hair_client");
const Wig_client = require("../../client/models/wig_client");
const Billing = require("../../client/models/billing")
router.get('/', async (req, res) => {

    try {
        const hairCustomers = await Hair_client.findAll();
        const wigCustomers = await Wig_client.findAll();
        const bills = await Billing.findAll();
        console.log(wigCustomers);
        console.log(hairCustomers);
        console.log(bills)
        return res.status(200).json({
            hairCustomers,
            wigCustomers,
            bills
        });


    } catch (err) {
        console.error("Error in /api/appointments route:", err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }

})

module.exports = router;