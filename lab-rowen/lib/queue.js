'use strict';

//queue constructor
module.exports = class Stack {
  this.length = 0;
  args.forEach(arg => this[this.length++] = arg);

}

//enqueue
Queue.prototype.enqueue = (arg) => {
  this.forEach(index => this[++this.length] = index);
  this[0] = arg
}

//dequeue
Queue.prototype.dequeue = () => {
  retVal = this[this.length];
  this[this.length--] = null;
  return retVal

}
