const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DB,
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to the database:", err);
  } else {
    console.log("✅ Connected to the database.");
  }
});

module.exports = { db };
