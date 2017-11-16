'use strict';

module.exports = class queue {

  constructor(){
    this.queue = new Array();
  }

  push(value){
    this.queue.push(value);
  }

  remove(){
    this.queue.splice(0, 1);
  }

};
