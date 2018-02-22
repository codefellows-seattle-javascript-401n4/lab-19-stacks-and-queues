'use strict';




module.exports = class stack {


    constructor() {
      this.length = 0;
    }


    push(value) {
        this[this.length++] = value;
    }


    pop() {
      let value = this[this.length-1];
      delete this[this.length-1];
        this.length--;
        return value;
    }

};



// facade = a superficial appearance or illusion of something
// const stackFactory = require("./stack-factory");


// Array of 2 methods
// push() drops it on top
// pop() takes the last thing off the pop
// peek() looks at the first one
