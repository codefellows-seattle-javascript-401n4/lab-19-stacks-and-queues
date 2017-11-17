'use strict';



const stackConstructor = require('../stack');



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



// facade = a superficial appearance or illusion of something
// const stackFactory = require("./stack-factory");


// Array of 2 methods
// push() drops it on top
// pop() takes the last thing off the pop
// peek() looks at the first one
