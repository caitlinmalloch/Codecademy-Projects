import { databasePassword } from "./.env";

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce app",
  password: "databasePassword",
  port: 5433,
});

pool.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
});

module.exports = pool;
