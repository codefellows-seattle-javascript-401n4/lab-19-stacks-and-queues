'use strict';

//needs to explore dequeue more and figure out what is needed for that one...

module.exports = class queue {
    constructor() {
        this.length = 0;
    }
    enqueue(value) {
        this[this.length++] = value;
    }
    dequeue() {
        let value = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return value;
    }
};