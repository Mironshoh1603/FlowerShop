const env = require("dotenv").config({ path: "./config.env" });
const app = require("./middleware/app");
const path = require("path");
const express = require("express");
require("./middleware/db");

app.use(express.json());
app.use(express.static("public"));
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("App is worked..", PORT));
