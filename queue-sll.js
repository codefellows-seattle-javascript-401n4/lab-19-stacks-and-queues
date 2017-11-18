'use strict';

let queueSll = (value) => ({next:null, value});

module.exports = () => {

  let queue = null;

  return {
    enqueue: function(value) {
      if(!queue) {
        queue = queueSll(value);
      } else {
        let current = queue;
        while(current.next !== null) {
          current = current.next;
        }
        current.next = queueSll(value);
      }
    },

    dequeue: function() {
      if(!queue) {return;}
      let value = queue.value;
      queue = queue.next;
      return value;

    }
  }
};
