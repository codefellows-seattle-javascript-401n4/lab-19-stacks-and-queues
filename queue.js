'use strict';
//this is an interface
const queueConstructor = require("./queue-constructor");
//const queueFactory = require('./queue-factory');
//const queueSll = require('./queue-sll');
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
