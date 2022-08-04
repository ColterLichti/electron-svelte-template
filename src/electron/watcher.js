// Simple watcher utility to refresh the electron window when the svelte build files are changed
// @electronWindow The electron window this script should refresh
// @delay A time in miliseconds to wait before firing a refresh.

module.exports = (electronWindow, delay = 20) => {
    const chokidar = require('chokidar');
    const { join } = require('path');

    let watcher;

    let handle;

    console.log('\x1b[31m%s\x1b[0m', '[HR - WATCHING FILES]: Electron hot-reloading enabled');
    // This should match output.dir from rollup.config.js but preceded with '../../'
    watcher = chokidar.watch(join(__dirname, `../../public/build`), { ignoreInitial: true });
    watcher.on('change', () => {
        // Clear timeout to avoid multiple alerts from happening in rapid succession
        if (handle)
            clearTimeout(handle);

        handle = setTimeout(() => {
            // Send a message to the console and refresh the electron window
            console.log('\x1b[31m%s\x1b[0m', '[HR - CONTENT CHANGED]: Refreshing Electron window!');
            electronWindow.reload();
        }, delay);
    });

    console.log('\x1b[31m%s\x1b[0m', '[HR - READY]: Close the electron window to stop hot-reload');

    return watcher;
}