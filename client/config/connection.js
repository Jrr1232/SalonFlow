const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = "";
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(
        "mysql://y0j6ds27yaf2txrf:pul98pzb147jp7at@qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/l6h21wocis7xf5ft");
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
}

module.exports = sequelize;