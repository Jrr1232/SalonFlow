const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
    // Production (JawsDB MySQL)
    console.log("Using JawsDB MySQL (Production)");
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect: "mysql",
        dialectModule: require("mysql2"), // Use mysql2 as the dialect module
        protocol: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    });
} else {
    // Local development
    console.log("Using Local MySQL (Development)");
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            dialectModule: require("mysql2"), // Use mysql2 as the dialect module
            port: 3306,
        }
    );
}

module.exports = sequelize;