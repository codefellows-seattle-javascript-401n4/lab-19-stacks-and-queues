'use strict';

let queueSll = () => {
  let queue = null;

  return {
    enqueue: function(value) {
      if(!queue) {
        queue = queueSll(value);
      } else {
        let last = queueSll(value);
        last.next = queue;
        queue = last;
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
