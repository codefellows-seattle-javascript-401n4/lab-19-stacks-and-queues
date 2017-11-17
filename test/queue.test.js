'use strict';



const Queue = require('../lib/queue/queue.js');
const expect = require('expect');



describe('queue testing', () => {

    it('should return 0 when done', () => {
      let newQueue = new Queue();
      expect(newQueue.length).toBe(null);

    });

    it('should return 3, 2, null, 1', () => {
      let newQueue = new Queue();

      newQueue.enqueue(1);
      newQueue.enqueue(3);
      expect(newQueue.length).toBe(2);
      expect(newQueue[1].toBe(3);
      done();
      
    });

    it('should return 2,3', () => {
      let newQueue = new Queue();

      newQueue.enqueue(1);
      newQueue.enqueue(3);
      expect(newQueue.dequeue()).toBe(1);
      expect(newQueue.dequeue()).toBe(3);
      console.log(newQueue);
      expect(newQueue.dequeue()).toBe(undefined);
      done();

    });

  });

    it('should return first item', (undefined) => {
      let firstSlot = newQueue.dequeue();

      expect(firstSlot).toEqual(1);
      expect(newQueue).toEqual({"queue": [2,3]});
      done();

    });
  });
