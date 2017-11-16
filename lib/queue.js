'use strict';

module.exports = class queue {
  constructor(){
    this.length = null;
    this.head = null;

    // this.oldQueue = new Array();
    // this.length = 0;
  }

  // enqueue(data) {
  //   return this.oldQueue.push(data);
  
  // }
  enqueue(value){
    this[this.length] = value;
    this.length++;
  }

  // dequeue() {
  //   return this.oldQueue.shift();
    
  // }

  dequeue(){
    let value = this[this.head];
    delete this[this.head];
    this.head++;
    return value;
  }
};