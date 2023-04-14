const { contextBridge } = require("electron");
const os = require("os");
const sys = require("systeminformation");
contextBridge.exposeInMainWorld("os", os);
contextBridge.exposeInMainWorld("sys", sys);
