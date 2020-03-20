const os = require('os');


console.log('Operation System: ', os.platform());
console.log('Prosessor Architecture: ', os.arch());
console.log('Prosessors Info: ', os.cpus());
console.log('Free Memory: ', os.freemem());
console.log('Summary Memory: ', os.totalmem());
console.log('Home Directory: ', os.homedir());
console.log('Time The System has been working: ', os.uptime());
// Operation System:  win32
// Prosessor Architecture:  x64
// Prosessors Info:  [
// {
//   model: 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz',
//   speed: 3093,
//   times: { user: 263969, nice: 0, sys: 114847, idle: 1609103, irq: 9250 }
// },
// {
//   model: 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz',
//   speed: 3093,
//   times: { user: 159651, nice: 0, sys: 35443, idle: 1792467, irq: 312 }
// },
// {
//   model: 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz',
//   speed: 3093,
//   times: { user: 286293, nice: 0, sys: 85800, idle: 1615343, irq: 358 }
// },
// {
//   model: 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz',
//   speed: 3093,
//   times: { user: 89326, nice: 0, sys: 18876, idle: 1879110, irq: 187 }
// }
// ]
// Free Memory:  4992409600
// Summary Memory:  10444566528
// Home Directory:  C:\Users\User
// Time The System has been working:  2637 (sec)
