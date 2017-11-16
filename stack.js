'use strict';

const stackConstructor = require("./stack-constructor");
module.exports = class stack {
  constructor() {
    this.stack = new stackConstructor();
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
};
