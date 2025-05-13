const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require('./models/User')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", require('./routes/authentication'));

module.exports = app;