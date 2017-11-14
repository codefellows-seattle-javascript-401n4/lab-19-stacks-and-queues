'use strict';

module.exports = class stack {
    constructor() {
        this.length = 0;
    }   
    push(value) {
        this[this.length++] = value;
    }
    pop() {
        this[this.length--] = null;
    }
}