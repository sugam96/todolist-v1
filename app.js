//jshint esversion:6

const express = require("express");
const bodypasrer = require("body-parser");
const bodyParser = require("body-parser");
const date = require(__dirname +  "/date.js");

//console.log(date);

const app = express();
var items = [];
var workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
    
    res.render("list", { listTitle: date.getDate(), items: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", items: workItems });
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function () {
    console.log("Listening at port 3000");
});