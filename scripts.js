const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;
var oldwidth;
var oldheigth;
function myalert () {
    window.alert("moinsen!");
}
function closewindow() {
    close();
}
function maximizewindow() {
    // resizeTo(screen.width, screen.height);
    oldwidth = outerWidth;
    oldheigth = outerHeight;
    electron.remote.getCurrentWindow().maximize();
    document.getElementById("maximizebutton").onclick=normalize;
}
function hidewindow() {
    electron.remote.getCurrentWindow().minimize();
}
function normalize() {
    resizeTo(oldwidth, oldheigth);
    electron.remote.getCurrentWindow().center();
    document.getElementById("maximizebutton").onclick=maximizewindow;
    delete oldwidth;
    delete oldheigth;
}