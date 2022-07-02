const { app, BrowserWindow } = require('electron') // 634 (gzipped: 392)
//yarn electron:serve   <-- run app
// -> yarn add @electron/remote
require('@electron/remote/main').initialize()
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // <- enable node module to get access to file system
      enableRemoteModel: true,
    },
  })

  win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

// Quit when all window are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'daewin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
