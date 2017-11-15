'use strict';

module.exports = class queue {
  constructor(){
    this.length = null;
    this.head = null;
  }

  enqueue(value){
    this[this.length] = value;
    this.length++;
  }

  dequeue(){
    let value = this[this.head];
    delete this[this.head];
    this.head++;
    return value;
  }
};