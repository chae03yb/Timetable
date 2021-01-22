"use strict";

const { app, BrowserWindow } = require("electron");
const server = require("./server");

app.on("ready", () => {
    let win = new BrowserWindow({
        title: "Timetable",
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true
        }
    });
    
    win.loadFile("./index/index.html");
    
    win.on("closed", () => {
        win = null;
    });    
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

server.listen(8956, "localhost", () => {
    console.log("server ready\n");
});