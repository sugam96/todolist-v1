//jshint esversion:6

const express = require("express");
const bodypasrer = require("body-parser");

const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(3000, function () {
    console.log("Listening at port 3000");
});