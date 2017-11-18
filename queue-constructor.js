'use strict';

module.exports = class queue {
  constructor() {
    this.length = 0;
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);

  }

  dequeue() {
    let value = this.array[0];
    this.array.shift();

    return value;
  }
};
