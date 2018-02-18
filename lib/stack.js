'use strict';

module.exports = class stack {
    constructor() {
        this.length = 0;
    }
    push(value) {
        this[this.length++] = value;
    }
    pop() {
        delete this[this.length - 1];
        return this[this.length--];
    }
}
