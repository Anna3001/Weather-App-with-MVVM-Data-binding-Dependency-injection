const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    title: 'MyWeatherApp',
    width: 800,
    height: 600,
  })

  if (true) {
    win.webContents.openDevTools();
  }

  win.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})