'use strict';

module.exports = () => {
  let queue = new Array();

  return {
    enqueue: function(value) {
      queue.push(value);
    },
    dequeue: function() {
      return queue.shift();
    }
  }
};
