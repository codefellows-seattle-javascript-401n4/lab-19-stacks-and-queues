'use strict';

module.exports = () => {
  let queue = new Array();

  return {
    enqueue: function(value) {
      queue.enqueue(value);
    }
    dequeue: function() {
      return queue.dequeue(value);
    }
  }
};
