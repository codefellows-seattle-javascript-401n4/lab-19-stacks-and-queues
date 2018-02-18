'use strict';

module.exports = class queue {
  constructor() {
    this.length = 0;
    this._array = new Array();
  }
  enqueue(value) {
    this._array[this.length ++] = value;
  }
  dequeue() {
    this._array.shift();
    this.length --;
  }
}
