const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving users from database");
    } else {
      res.send(result.rows);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
