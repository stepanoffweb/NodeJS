//const chalk = require('chalk');
//const text = require('./data');


//console.log(chalk.red(`${text}`));
//console.log(chalk.blue(__dirname));//E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start
//console.log(chalk.yellow(__filename));//E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start\index.js

// node.js оборачивает каждый модуль в (function(exports, require, module, __dirname, __filename) {...})
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, result) => {
  // if (request.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     result.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     result.end(data);
  //   });
  // }else  if (request.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     result.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     result.end(data);
  //   });
  // }
  let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
  const ext = path.extname(filePath);
  if (!ext) {
    filePath += '.html';
  }
  let contentType;
  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          result.writeHead(500, {
            'Content-Type': 'text/html'
          });
        } else {
          result.writeHead(200, {
            'Content-Type': 'text/html'
          });
          result.end(data);
        }
      });
    } else {
      result.writeHead(200, {
        'Content-Type': contentType
      });
      result.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
/* nodemon мониторит изменения скрипта и перезапускает сервак npm run *** */













