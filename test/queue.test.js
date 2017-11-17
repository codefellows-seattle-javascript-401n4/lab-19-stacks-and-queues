'use strict';



const Queue = require('../lib/queue/queue.js');
const expect = require('expect');



describe('queue testing', () => {
    let newQueue = new Queue();

    it('should return object when done', (done) => {
      newQueue = newQueue.enqueue(1);
      newQueue = newQueue.enqueue(2);
      newQueue = newQueue.enqueue(3);

      expect(newQueue).toEqual([1,2,3]);
      expect(newQueue.queue[1]).toEqual(2);
      done();

  });

    it('should return first item', (done) => {
      let firstSlot = newQueue.dequeue();

      expect(firstSlot).toEqual(1);
      expect(newQueue).toEqual({"queue" : [2,3]});
      done();

    });
  });
