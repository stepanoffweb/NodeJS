const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), err => { // async
//   if (err) {
//     throw err;
//   }
//   console.log('Folder "test" is created');
// });
//повторный вызов  = error так как папка уже создана

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello, FS!', err => {
//   if(err) {
//     throw err;
//   }
//   console.log('File "text.txt" is created');
// });
// fs.appendFile(filePath, '\nand Hello again!', err => {
//   if(err) {
//     throw err;
//   }
//   console.log('File "text.txt" is created');
// });

fs.readFile(filePath, (err, content) => {
  if(err) {
    throw err;
  }
  console.log('Content:', content);// Content: <Buffer 48 65 6c 6c 6f 2c 20 46 53 21 0a 61 6e 64 20 48 65 6c 6c 6f 20 61 67 61 69 6e 21>
  const data = Buffer.from(content);
  console.log('Content:', data.toString());// Content: Hello, FS!
// and Hello again!
});

fs.readFile(filePath, 'utf-8', (err, content) => {
  if(err) {
    throw err;
  }
  console.log('Content:', content);// Content: Hello, FS!
// and Hello again!
});
