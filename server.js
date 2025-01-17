const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet'); // Import helmet
const routes = require('./controllers');
const sequelize = require('./client/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const favicon = require('express-favicon');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure session
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Apply middleware
app.use(session(sess));
app.use(cors({
    origin: 'http://localhost:5173', // Adjust as needed
    credentials: true, // Allow cookies with requests
}));

// Add helmet and configure CSP
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                fontSrc: ["'self'", "https://johannysunisex-cdc945aa3db4.herokuapp.com"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                scriptSrc: ["'self'"],
            },
        },
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Add routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
});
