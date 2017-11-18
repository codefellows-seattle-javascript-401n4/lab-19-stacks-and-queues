'use strict';

module.exports = class queue {
  constructor() {
    this.queue = new Array();
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
};
