const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require("./routes");

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(logger("dev"));

app.use("/api", routes);

module.exports = app;
