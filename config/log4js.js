const log4js = require("log4js");
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
     fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
}

// log4js.addAppender(log4js.appenders.console());
const date = new Date();


let logName =`logs/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log`;
log4js.configure({
    appenders: {
      //  file: { type: 'file', filename: path.join(__dirname, logName), }  ,
        everything: { 
            type: 'file',           
            maxLogSize: 10485760, 
            backups: 3, 
            compress: true 
        },
        error: { type: 'file', filename: `logs/error-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log` },
        info: { type: 'file', filename: `logs/info-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log` },
        tracer: { type: 'file', filename: `logs/tracer-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log` },
       // integra: { type: 'multiFile', filename: path.join(__dirname, logName), property: 'prop', extension: '.txt' }
    },
    categories: {
        default: {
            appenders: ['error'], level: 'error'
        },
        info: {
            appenders: ['info'], level: 'info'
        },
        tracer: {
            appenders: ['tracer'], level: 'trace'
        }
    }
});


module.exports = log4js;