const { contextBridge, ipcRenderer } = require("electron");
const os = require("os");
const sys = require("systeminformation");
contextBridge.exposeInMainWorld("os", os);
contextBridge.exposeInMainWorld("sys", sys);
ipcRenderer.on("example", (event, data) => {
  console.log(`Received data from main process: ${data}`);
});
