'use strict';

let queueSll = (value) => ({next:null, value});

module.exports = () => {
  console.log(`hi`);
  let queue = null;
  console.log(`queue before returning`, queue);
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
  console.log(`queu after returning: `, queue);
};
