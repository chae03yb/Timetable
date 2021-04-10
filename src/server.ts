import express from "express";
import exphbs = require("express-handlebars");
import { join } from "path";
import { readFile, unlink, writeFile } from "fs";

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}

const app: express.Application = new App().application;
const Path: string = __dirname;

let hbs: Exphbs = exphbs.create({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: join(__dirname, "../views/layouts"),
    partialsDir: join(__dirname, "../views/")
});

app.use(express.json());
app.use(express.static(`${__dirname}/static/`))

app.set("views", join(__dirname, "../views/"));
app.set("view engine", ".hbs");

app.engine(".hbs", hbs.engine);

app.get("/", (req: express.Request, res: express.Response) => {
});

app.get("/timetable", (req: express.Request, res: express.Response) => {
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

app.get("/config", (req: express.Request, res: express.Response) => {

});



app.get("/api/timetable", (req: express.Request, res: express.Response) => {

});

app.patch("/api/timetable", (req: express.Request, res: express.Response) => {

});

app.delete("/api/timetable", (req: express.Request, res: express.Response) => {

});

app.listen(8956, () => {
    console.log("server online");
});