const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;
const path = require("path");
const url = require("url");
var mainwindow
var menuTemplate = [
    {
        label: "file",
        submenu: [
            {
                label: "test",
                click() {
                    console.log("test");
                }
            }, {
                label: "quit",
                accelerator: process.platform === "darwin" ? "Command+Q":"Ctrl+Q",
                click() {
                    app.quit();
                }
            }, {
                label: "new",
                click() {
                    createWindow("add.html", 300, 200, "add Item", false, mainwindow);
                }
            }
        ]
    }
];
if (process.platform === "darwin") {
    menuTemplate.unshift({});
}
app.on("ready", ()=> {
    mainwindow = createWindow("main.html", null, null, "main", true);
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createWindow(html, width, height, title, frame, parent) {
    const window = new BrowserWindow({
        width: width,
        height: height,
        title: title,
        frame: frame,
        parent: parent
    });
    window.loadURL(url.format({
        pathname: path.join(__dirname, html),
        protocol: "file",
        slashes: true
    }));
    window.on("close", ()=>{
        delete window;
    });
    return window;
}