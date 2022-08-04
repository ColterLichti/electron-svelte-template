// Electron starting point
const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const isDev = require('electron-is-dev');
const watch = require('./watcher');

const windowOpts = {
    autoHideMenuBar: true,
    show: false,
    minWidth: 400,
    minHeight: 300,
    fullscreenable: true,
    webPreferences: {
        preload: join(__dirname, './preload.js'),
        devtools: isDev
    },
    icon: join(__dirname, '../../public/favicon.png')
}

let watchHandle;

// App ready event
app.on('ready', () => {
    // Create the electron window
    const window = new BrowserWindow(windowOpts);

    // Show window only when it's fully intialized (fixes jitter on open)
    window.on('ready-to-show', window.show);

    // Load the build files produced by Svelte
    window.loadFile(join(__dirname, '../../public/index.html'));

    // Watch the web content for changes then refresh electron (Dev mode only)
    if(isDev)
        watchHandle = watch(window);
});

// Terminate the app if all windows are closed (Not on Mac, aka darwin)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        cleanUpAndDestroy();
    }
});

function cleanUpAndDestroy() {
    // Close the watcher if one was created
    if (watchHandle)
        watchHandle.close();

    // Any other pre-closing cleanup should go here



    // Terminate electron
    app.quit();
}