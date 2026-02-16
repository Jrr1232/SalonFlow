const router = require("express").Router();
const checkoutroutes = require("./checkout-routes")
const adminRoutes = require("./apointment.js")

router.use("/checkout", checkoutroutes)
router.use("/admin", adminRoutes)

module.exports = router;