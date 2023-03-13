//jshint esversion:6

const express = require("express");
const bodypasrer = require("body-parser");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { dayDateMonth: day, items: items });
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Listening at port 3000");
});