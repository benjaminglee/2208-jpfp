const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// static middleware

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(volleyball);
app.use(express.json());
// this is where some things should go
app.use("/api", require("./api"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

module.exports = app;
