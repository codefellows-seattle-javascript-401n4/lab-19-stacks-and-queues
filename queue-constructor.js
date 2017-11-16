'use strict';

module.exports = class queue {
  constructor() {
    this.length = 0;
  }

  enqueue(value) {
    this[this.length++] = value;
  }

  dequeue() {
    let value = this[0];
    //console.log(this[0] + 'head');
    delete this[0];
    this.length--;
    return value;
  }
};
