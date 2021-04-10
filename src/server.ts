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

const app = new App().application;
const Path = __dirname;

app.use(express.json());
app.use(express.static(`${__dirname}/static/`))

app.set("view engine", "hbs");
app.set("views", join(__dirname, "../views/"));

app.engine("hbs", exphbs({
    defaultLayout: "",
    extname: "hbs",
    layoutsDir: join(__dirname, "../views/layouts"),
    partialsDir: join(__dirname, "../views/")
}));

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(``);
});

app.get("/timetable", (req: express.Request, res: express.Response) => {
    res.render(`${Path}/views/timetable.handlebars`, {});
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