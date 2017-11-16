'use strict';

module.exports = class Stack {
  constructor() {
    this.stack = new Array();
  }

  push(value) {
    this.stack.push(value);
  }
  
  pop() {
    return this.stack.pop();
  }
};