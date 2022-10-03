const electron = window.require('electron');
const { ipcRenderer } = electron;

export default function send(sql: string) {
    return new Promise((resolve) => {
        ipcRenderer.once('asynchronous-reply', (_:any, arg: any) => {
            resolve(arg);
        });
        ipcRenderer.send('asynchronous-message', sql);
    });
}