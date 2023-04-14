const { contextBridge } = require("electron");
const os = require("os");
const sys = require("systeminformation");
const osUtils = require("node-os-utils");
contextBridge.exposeInMainWorld("os", os);
contextBridge.exposeInMainWorld("sys", sys);
contextBridge.exposeInMainWorld("osUtils", osUtils);
