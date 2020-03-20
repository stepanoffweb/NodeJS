const chalk = require('chalk');
const text = require('./data');


console.log(chalk.red(`${text}`));
console.log(chalk.blue(__dirname));//E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start
console.log(chalk.yellow(__filename));//E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start\index.js

// node.js оборачивает каждый модуль в (function(exports, require, module, __dirname, __filename) {...})
