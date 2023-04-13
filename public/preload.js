const { contextBridge, ipcRenderer } = require("electron");
const is = require("systeminformation");
contextBridge.exposeInMainWorld("is", is);
ipcRenderer.on("example", (event, data) => {
  console.log(`Received data from main process: ${data}`);
});
