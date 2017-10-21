const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;
function myalert () {
    window.alert("moinsen!");
}
function closewindow() {
    close();
}
function maximizewindow() {
    // resizeTo(screen.width, screen.height);
    electron.remote.getCurrentWindow().maximize();
    document.getElementById("maximizebutton").onclick ="normalize()";
}
function hidewindow() {
    electron.remote.getCurrentWindow().minimize();
}