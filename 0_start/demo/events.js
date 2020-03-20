// Основополагающий концепт NodeJS (всё построено на нем)
const EventEmitter = require('events');
const emitter = new EventEmitter;

// emitter.on('anything', data => {
//   console.log('ON.anything: ', data);
// });
// emitter.emit('anything', {a: 1});

// setTimeout(() => {
// emitter.emit('anything', {c: 1});
// }, 1500);

class Dispatcher extends EventEmitter {
  subscrib(eventName, callback) {
    console.log('[Subscribe...]');
    this.on(eventName, callback);
  }
  dispatch(eventName, data) {
    console.log('[Dispatch...]');
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher();

dis.subscrib('something', data => {
  console.log('ON.someting: ', data);
});
dis.dispatch('something', {a: 66});
