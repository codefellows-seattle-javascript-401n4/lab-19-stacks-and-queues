'use strict';

//this is a function, not a class, so it must be called in the stack.test.js
module.exports = () => {
  let stack = new Array();

  return {
    push: function(value) {
      stack.push(value);
    },
    pop: function() {
      return stack.pop();
    }
  };
};
