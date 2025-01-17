const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const routes = require('./controllers');
const sequelize = require('./client/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

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

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; font-src 'self' http://localhost:3001;");
    next();
});



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
