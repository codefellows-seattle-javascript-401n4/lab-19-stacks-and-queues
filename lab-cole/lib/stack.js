'use strict';

const stackConstructor = require('./stack-constructor.js');
const queueConstructor = require('./queue-constructor.js');

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

module.exports = class queue {
    constructor() {
        this.stack = new queueConstructor();
    }
    push(value) {
        this.stack.enqueue(value);
    }
    pop() {
        return this.stack.dequeue();
    }
};