const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(DB, {})
  .then(() => {
    console.log("DATABASE .connnected...");
  })
  .catch((err) => {
    console.log("Database eroor:", err);
  });
