import express from "express";

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}
const app = new App().application;

app.use(express.json());
app.use(express.static(`${__dirname}/static/`))

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(``);
})

app.listen(80, () => {
    console.log("server online");
})