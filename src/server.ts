import express = require("express");
import exphbs = require("express-handlebars");
import { readFileSync, unlink, writeFile } from "fs";

const app: express.Application = express();
const Path: string = __dirname;

app.use(express.json());
app.use(express.static(`${Path}/../static/`))

app.set("views", `${Path}/../views/`);
app.set("view engine", "handlebars");

app.engine("handlebars", exphbs.create().engine);

app.get("/", (req: express.Request, res: express.Response) => {
});

app.get("/timetable", (req: express.Request, res: express.Response) => {
    res.render(`timetable.hbs`, { 
        Timetable: JSON.parse(readFileSync("./data/example.json").toString()) 
    });
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