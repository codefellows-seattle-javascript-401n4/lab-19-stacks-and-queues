'use strict';

module.exports = class queue {
  constructor(){
    this.length = 0;
  }

  enqueue(value){
    this[this.length] = value;
    this.length++;
  }
};
