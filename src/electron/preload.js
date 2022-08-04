// Think of this file as being a bridge in between the renderer process and the main process
const { contextBridge, ipcRenderer } = require('electron');

const API = {
    
}

contextBridge.exposeInMainWorld("api", API);