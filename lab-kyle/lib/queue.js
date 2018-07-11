'use strict';

module.exports = class Queue {
  constructor(){
    this.queue = new Array();
  }

  unshift(value){
    this.queue.unshift(value);
  }

  shift(){
    return this.queue.shift();
  }
};
