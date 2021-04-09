const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/Timetable":
            if (req.method === "GET") {
                fs.readFile("./resources/Timetable.json", "utf8", (err, data) => {
                    if (err) {
                        res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                        res.end(err);
                    }
                    else {
                        res.end(data);
                        res.writeHead(200, {"Content-Type": "application/json; charset=utf8"});
                    }
                });
            }
            if (req.method === "POST") {
                let data = "";

                req.on("data", chunk => data += chunk);
                req.on("end", () => {
                    fs.writeFile("./resources/Timetable.json", data, (err) => {
                        if (err) {
                            res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                            res.end(err);
                        }
                        else {
                            res.writeHead(201, {"Content-Type": "text/plain; charset=utf8"});
                            res.end();
                        }
                    });
                });
            }
            if (req.method === "DELETE") {
                fs.unlink("./resources/Timetable.json", (err) => {
                    if (err) {
                        res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                        res.end();
                    }
                    else {
                        res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
                        res.end();
                    }
                })
            }
            break;
        case "/ClassStatus":
            if (req.method === "GET") {
                fs.readFile("./resources/ClassStatus.json", "utf8", (err, data) => {
                    if (err) {
                        res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                        res.end(err);
                    }
                    else {
                        res.writeHead(200, {"Content-Type": "application/json; charset=utf8"});
                        res.end(data);
                    }
                });
            }
            if (req.method === "POST") {
                let data = "";

                req.on("data", (chunk) => {
                    data += chunk;
                });
        
                req.on("end", () => {
                    fs.writeFile("./resources/ClassStatus.json", data, "utf8", (err) => {
                        if (err) {
                            res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                            res.end(err);
                        }
                        else {
                            res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
                            res.end("success");
                        }
                    });
                });
            }
            if (req.method === "DELETE") {
                fs.writeFile("./resources/ClassStatus.json", JSON.stringify([[],[],[],[],[],[],[]]), "utf8", (err) => {
                    if (err) {
                        res.writeHead(500, {"Content-Type": "text/plain; charset=utf8"});
                        res.end(err);
                    }
                    else {
                        res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
                        res.end("initialized classStatus");
                    }
                })
            }
            break;
    }
});

module.exports = server;

/*
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
*/