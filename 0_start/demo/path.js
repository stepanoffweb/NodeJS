const path = require('path');// встроенный модуль NodeJS

console.log('Название файла: ', path.basename(__filename));
console.log('Название диры: ', path.dirname(__filename));
console.log('Название диры: ', path.extname(__filename));
// Íàçâàíèå ôàéëà:  path.js
// Íàçâàíèå äèðû:  E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start\demo
// .js
console.log('Parse: ', path.parse(__filename));
// Parse:  {
//   root: 'E:\\',
//   dir: 'E:\\MONEYweb\\JOB\\4_myActivity\\0_REPO\\7_NodeJS\\0_start\\demo',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }
console.log('Parse: ', path.parse(__filename).name);// Parse: path
console.log(path.join(__dirname, 'server', 'index.html'));//задаем строку с вымышленным путем
//E:\MONEYweb\JOB\4_myActivity\0_REPO\7_NodeJS\0_start\demo\server\index.html


