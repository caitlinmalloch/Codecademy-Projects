/*
 * Package Imports
 */

const path = require("path");
require("dotenv").config();
const express = require("express");
const partials = require("express-partials");
const { session } = require("passport");
const passport = require("passport");
const GitHubStrategy = require("passpory-github2").Strategy;

const app = express();

/*
 * Variable Declarations
 */

const PORT = 3000;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

/*
 * Passport Configurations
 */

passport.use(
  new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback",
  }),
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

/*
 *  Express Project Setup
 */

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(partials());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "codecademy",
    resave: false,
    saveUnitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

/*
 * Routes
 */

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.get("/account", (req, res) => {
  res.render("account", { user: req.user });
});

app.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

/*
 * Listener
 */

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/*
 * ensureAuthenticated Callback Function
 */

app.get("/route", passport.authenticate("strategy", { scope: [] }));

passport.authenticate("scope", {
  failureRedirect: "/error",
  successRedirect: "/success",
});

app.get("/page", ensureAuthenticated, (req, res) => {
  res.render("template", { variable: data });
});

function middleWare(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/redirect");
}
