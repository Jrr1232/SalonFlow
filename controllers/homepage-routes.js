const router = require("express").Router();
const Hair_client = require("../client/models/hair_client");
const Wig_client = require('../client/models/wig_client');

router.post('/login-hair', async (req, res) => {
    try {
        // Check if the email is already associated with a Wig Account
        const wigUserData = await Wig_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (wigUserData) {
            return res.status(400).json({ message: "Email is already associated with a Wig Account. Please choose a new email for your Hair Account." });
        }

        // Check if the user exists in the Hair Account database
        const hairUserData = await hairClient.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (hairUserData) {
            // Successfully found user in Hair Account, respond with redirect URL
            return res.json({ redirectTo: 'http://localhost:5173/calendar' });
        } else {
            // User not found in Hair Account
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        // Handle any unexpected errors
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login-wigs', async (req, res) => {
    try {
        // Check if the email is already associated with a Hair Account
        const hairUserData = await hairClient.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (hairUserData) {
            return res.status(400).json({ message: "Email is already associated with a Hair Account. Please choose a new email for your Wig Account." });
        }

        // Check if the user exists in the Wig Account database
        const wigUserData = await Wig_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username
            }
        });

        if (wigUserData) {
            // Successfully found user in Wig Account, respond with redirect URL
            return res.json({ redirectTo: 'http://localhost:5173/calendar' });
        } else {
            // User not found in Wig Account
            console.log("User Not Found:", req.body.email, req.body.username);  // Better logging for debugging
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        // Log error and respond with 500 status
        console.error("Server error:", err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/signup-wig', async (req, res) => {
    try {
        // Check if the user already exists
        const userData = await Wig_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username,
            },
        });

        if (userData) {
            return res.status(409).json({ message: 'Email or Username already exists' }); // 409 Conflict
        }

        // Create a new Wig Client
        const newWigClient = await Wig_client.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            email: req.body.email,
            client_type: 'wig',
        });

        // Set session variables
        req.session.logged_in = true;
        req.session.email = req.body.email;
        req.session.first_name = req.body.first_name;

        // Respond with success and redirect URL
        return res.json({
            message: 'Signup successful',
            redirectTo: 'http://localhost:5173/calendar',
            client: newWigClient,
        });
    } catch (err) {
        console.error('Error during /signup-wig:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



router.post('/signup-hair', async (req, res) => {
    try {
        // Check if the user already exists
        const userData = await Hair_client.findOne({
            where: {
                email: req.body.email,
                username: req.body.username,
            },
        });

        if (userData) {
            return res.status(409).json({ message: 'Email or Username already exists' }); // 409 Conflict
        }

        // Create a new user
        const newHairClient = await Hair_client.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            email: req.body.email,
            client_type: 'hair',
        });

        // Set session variables
        req.session.logged_in = true;
        req.session.email = req.body.email;
        req.session.first_name = req.body.first_name;

        // Respond with success and redirect URL
        return res.json({
            message: 'Signup successful',
            redirectTo: 'http://localhost:5173/calendar',
            client: newHairClient,
        });
    } catch (err) {
        console.error('Error during /signup-hair:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;



