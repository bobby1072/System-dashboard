const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const { app, BrowserWindow, ipcMain } = electron;
let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    title: "systems-dashboard",
    width: 1024,
    height: 1024,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
  ipcMain.on("example", (event, data) => {
    console.log(`Received data from renderer process: ${data}`);
    event.reply("example-reply", "Message received");
  });
}
