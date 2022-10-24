const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.render("index");
});
app.get("/cart", (req, res, next) => {
  res.render("cart");
});
app.get("/about", (req, res, next) => {
  res.render("about");
});
app.get("/category", (req, res, next) => {
  res.render("category");
});
app.get("/details", (req, res, next) => {
  res.render("detail");
});
app.get("/contact", (req, res, next) => {
  res.render("contact");
});
app.get("/register", (req, res, next) => {
  res.render("register");
});
app.get("/special", (req, res, next) => {
  res.render("special");
});
app.get("/account", (req, res, next) => {
  res.render("account");
});

module.exports = app;
