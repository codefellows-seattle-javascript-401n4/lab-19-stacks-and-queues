'use strict';

const queueConstructor = require("./queue-constructor");
module.exports = class queue {
  constructor() {
    this.queue = new queueConstructor();
  }

  enqueue(value) {
    this.queue.enqueue(value);
  }

  dequeue() {
    return this.queue.dequeue();
  }
};
