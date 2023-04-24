const express = require("express");
const router = express.Router();
const pool = require("./db"); // import the database connection

router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from database");
  }
});

module.exports = router;
