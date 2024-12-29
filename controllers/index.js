const router = require('express').Router();
const checkoutroutes = require('./api')
const homeRoutes = require('./homepage-routes')

router.use('/', homeRoutes)
router.use("/api", checkoutroutes)

module.exports = router;
