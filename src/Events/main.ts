const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const fs = require('fs');
const env = require('env');

const database = new sqlite3.Database(env.DB_PATH, (err: any) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event: any, arg: string) => {
    const sql = arg;
    if(env.DEBUG_SQL == "TRUE"){
        fs.writeFileSync(env.DEBUG_SQL_LOG_PATH, (sql + "\n"), {flag: 'a+'})
    }
    database.all(sql, (err: any, rows: any) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});



export {}