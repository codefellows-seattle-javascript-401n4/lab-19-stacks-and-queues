'use strict';

const stack = require('./stack.js');

module.exports = class stackFacade {

  constructor(){
    this.stackFacade = new stack();
  }

  push(value){
    this.stackFacade.push(value);
  }

  pop(){
    return this.stackFacade.pop();
  }
  
};
