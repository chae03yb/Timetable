"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exphbs = require("express-handlebars");
const path_1 = require("path");
class App {
    constructor() {
        this.application = express_1.default();
    }
}
const app = new App().application;
const Path = __dirname;
let hbs = exphbs.create({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path_1.join(__dirname, "../views/layouts"),
    partialsDir: path_1.join(__dirname, "../views/")
});
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}/static/`));
app.set("views", path_1.join(__dirname, "../views/"));
app.set("view engine", ".hbs");
app.engine(".hbs", hbs.engine);
app.get("/", (req, res) => {
});
app.get("/timetable", (req, res) => {
    res.render(`${Path}/views/timetable.handlebars`, [
        { Mon: "M1", Tue: "T1", Wed: "W1", Thu: "H1", Fri: "F1" },
        { Mon: "M2", Tue: "T2", Wed: "W2", Thu: "H2", Fri: "F2" },
        { Mon: "M3", Tue: "T3", Wed: "W3", Thu: "H3", Fri: "F3" },
        { Mon: "M4", Tue: "T4", Wed: "W4", Thu: "H4", Fri: "F4" },
        { Mon: "M5", Tue: "T5", Wed: "W5", Thu: "H5", Fri: "F5" },
        { Mon: "M6", Tue: "T6", Wed: "W6", Thu: "H6", Fri: "F6" },
        { Mon: "M7", Tue: "T7", Wed: "W7", Thu: "H7", Fri: "F7" }
    ]);
});
app.get("/config", (req, res) => {
});
app.get("/api/timetable", (req, res) => {
});
app.patch("/api/timetable", (req, res) => {
});
app.delete("/api/timetable", (req, res) => {
});
app.listen(8956, () => {
    console.log("server online");
});
//# sourceMappingURL=server.js.map