const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;


let mainWindow;

function defineMainWindow() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        show: false
    });
    // let menu = Menu.buildFromTemplate([{}]);
    Menu.setApplicationMenu(null);

    mainWindow.on('close', () => {
        console.log('mainWindow close');
        mainWindow = null
    });

}

const activate = () => {
    console.log('start');
    defineMainWindow();
    mainWindow.loadURL(`file://${__dirname}/views/capture.html`);
    mainWindow.show();
    // mainWindow.openDevTools();


};

app.on('ready', _ => {
    activate();
});
