const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 330,
        minWidth: 330,
        maxWidth: 330,
        height: 450,
        minHeight: 450,
        maxHeight: 450,
        webPreferences: {
            defaultFontSize: 14,
            nodeIntegration: true
        }
    });

    win.loadFile("./index.html");
}

app.whenReady().then(createWindow());

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})