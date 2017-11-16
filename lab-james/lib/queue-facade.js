'use strict';

const queue = require('./queue.js');

module.exports = class queueFacade {

  constructor(){
    this.queueFacade = new queue();
  }

  push(value){
    this.queueFacade.push(value);
  }

  remove(){
    this.queueFacade.splice(0, 1);
  }

};
