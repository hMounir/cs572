const EventEmitter = require('events');

class Gym extends EventEmitter {
  constructor() {
    super(); //must call super for "this" to be defined.
  }

  boom(){
    this.emit('boom');
  }
}

const gym = new Gym();

gym.on('boom', () => {
  console.log('Athlete is working out');
});

setTimeout(function( ) {clearInterval(setInterval(function(){gym.boom()} ,1000));}, 5000); //ever