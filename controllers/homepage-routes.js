const router = require("express").Router();
const Hair_client = require('../client/models/hair_client');
const Wig_client = require('../client/models/wig_client');
router.post('/hair', async (req, res) => {
    try {
        // Find all users with the provided username
        const userDatas = await Hair_client.findAll({
            where: {
                username: req.body.username,
            }
        });

        // Check if a user with the provided email and username already exists
        const userData = await Hair_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (userData) {
            // Send clear signal to frontend that the user exists
            return res.json({
                message: 'User already exists. Please log in.',
                userData
            });
        } else {
            // If the user does not exist, create a new user
            const newHairClient = await Hair_client.create({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                email: req.body.email,
                client_type: 'hair'
            });

            // Set session variables
            req.session.logged_in = true;
            req.session.email = req.body.email;
            req.session.first_name = req.body.first_name;
            await req.session.save(); // Ensure the session is saved

            // Send the response with the new user data
            return res.json({ newHairClient, userDatas });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/wigs', async (req, res) => {
    try {
        // Check if a user with the provided email and username already exists
        const userData = await Wig_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (userData) {
            // If the user exists, redirect to the services01 page
            res.json({ redirectTo: '/services/hair' });
        } else {
            // If the user does not exist, create a new user
            const newWigClient = await Wig_client.create({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                email: req.body.email,
                client_type: 'wig'
            });

            // Set session variables
            req.session.logged_in = true;
            req.session.email = req.body.email;
            req.session.first_name = req.body.first_name;
            await req.session.save(); // Ensure the session is saved

            // Send the response with the new user data
            return res.json({ newWigClient, userDatas });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
