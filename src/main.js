"use strict";

const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
    let win = new BrowserWindow({
        title: "Timetable",
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,  
        },
    });
    
    win.loadURL("http://localhost:8956/Timetable");
    
    win.on("closed", () => {
        win = null;
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
});
