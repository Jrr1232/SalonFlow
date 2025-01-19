const router = require("express").Router();
const Hair_client = require('../client/models/wig_client');
const Wig_client = require('../client/models/wig_client');

router.post('/hair', async (req, res) => {
    try {
        const userDatas = await Hair_client.findAll({
            where: {
                username: req.body.username,
            }
        });

        const userData = await Hair_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (userData) {
            res.json({ redirectTo: 'http://localhost:5173/services', userDatas });
        } else {
            const newHairClient = await Hair_client.create({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                email: req.body.email,
                client_type: 'hair'
            });

            req.session.logged_in = true;
            req.session.email = req.body.email;
            req.session.first_name = req.body.first_name;
            req.session.save();

            res.json({ newHairClient, userDatas });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});




router.post('/wigs', async (req, res) => {
    try {
        const userData = await Wig_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (userData) {
            res.redirect('http://localhost:5173/services01');
        } else {
            const newWigClient = await Wig_client.create({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                email: req.body.email,
                client_type: 'wig'
            });

            req.session.logged_in = true;
            req.session.email = req.body.email;
            req.session.first_name = req.body.first_name;
            req.session.save();

            res.json(newWigClient);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
