'use strict';

//stack constructor
let Stack = module.exports = function(...args){
  this.length = 0;

  //using a spread and forEach here to make stack construction shorter.
  args.forEach(arg => this[this.length++] = arg)
}

//pop
Stack.prototype.burst = function(){
  //removes the top(last) thing in the stack
  //returns the thing that was removed.
  let retVal = this[this.length--];
  return retVal;
}

//push
Stack.prototype.drive = function(...args){
  //puts something on top (at the end) of the stack.
  //using a spread and forEach here so multiple items can be pushed
  args.forEach(arg => this[this.length++] = arg)
}
