const express = require("express");
const session = require("express-session");
// Add helmet below:
const helmet = require("helmet");
const fs = require("fs");

const PORT = process.env.PORT || 4001;
const app = express();

let reviews = [];

app.use(express.static("public"));
app.use(
  session({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
    },
  })
);

// Implement helmet module below:
app.use(helmet());

app.get("/", (req, res) => {
  if (req.query.newReview) reviews.push(req.query.newReview);
  const formattedReviews = reviews
    .map((review) => `<dt>User</dt><dd>${review}</dd>`)
    .join(" ");
  const template = fs.readFileSync("./views/index.html", "utf8");
  const view = template.replace("$reviews$", formattedReviews);
  res.send(view);
});

// Endpoint in development
app.post("/login", [], (req, res) => {
  // res.render("dashboard", { email, password });
});

app.listen(PORT, () =>
  console.log(`The server is listening at port: http://localhost:${PORT}`)
);
