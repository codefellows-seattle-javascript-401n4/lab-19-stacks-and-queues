'use strict';

class Queue {

  constructor() {
    this.queue = new Array();
 }

  enqueue(value) {

    this.queue.push(value);
    return this;
  }

  dequeue() {

    return this.queue.shift();

  }
}
  
module.exports = Queue;