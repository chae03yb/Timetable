"use strict";
exports.__esModule = true;
var express = require("express");
var exphbs = require("express-handlebars");
var fs_1 = require("fs");
var app = express();
var Path = __dirname;
app.use(express.json());
app.use(express.static(Path + "/../static/"));
app.set("views", Path + "/../views/");
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.create().engine);
app.get("/", function (req, res) {
});
app.get("/timetable", function (req, res) {
    res.render("timetable.hbs", {
        Timetable: JSON.parse(fs_1.readFileSync("./data/example.json").toString())
    });
});
app.get("/config", function (req, res) {
});
app.get("/api/timetable", function (req, res) {
});
app.patch("/api/timetable", function (req, res) {
});
app["delete"]("/api/timetable", function (req, res) {
});
app.listen(8956, function () {
    console.log("server online");
});
