'use strict';

module.exports = class queue {
  constructor() {
    this.queue = new Array();
  }

  enqueue(value) {
    this.queue.enqueue(value);
  }

  dequeue() {
    return this.queue.dequeue();
  }
};
