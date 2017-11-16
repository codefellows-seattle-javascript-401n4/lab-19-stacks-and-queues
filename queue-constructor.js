'use strict';

module.exports = class queue {
  constructor() {
    this.length = 0;
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);

  }

  dequeue() {
    let value = this.array[0];
    this.array.shift();

    return value;
    // let str = "";
    // for(let i = 0; i < this.length; i++) {
    //   str += this[i] + ", ";
    // }
    // console.log("queue before delete: " + str);
    // console.log("==============================================");
    // delete this[0];
    //
    //
    // //console.log(this[0] + 'head');
    // this.length--;
    //
    // str = "";
    // for(let i = 0; i < this.length; i++) {
    //   str += this[i] + ", ";
    // }
    // console.log("queue after delete: " + str);
    // console.log("==============================================");

  }
};
