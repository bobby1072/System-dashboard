const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const { app, BrowserWindow } = electron;
let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
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
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", (e) => {
    e.preventDefault();
  });
}
