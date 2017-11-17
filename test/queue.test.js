'use strict';



const Queue = require('../lib/queue/queue.js');


describe('queue testing', () => {

  it('should return 0', () => {
    let newQueue = new Queue();

    expect(newQueue.length).toBe(null);

  });


  it('should return 3, 2, null, null : 1', () => {
    let newQueue = new Queue();

    newQueue.enqueue(1);
    newQueue.enqueue(3);
    expect(newQueue.length).toBe(2);
      console.log(newQueue.length);
    expect(newQueue.enqueue[1]).toBe(3);

  });


  it('should return length:2, head:3', () => {
    let newQueue = new Queue();

    newQueue.enqueue(1);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBe(3);
      console.log(newQueue);
    expect(newQueue.dequeue()).toBe(undefined);

  });
});
