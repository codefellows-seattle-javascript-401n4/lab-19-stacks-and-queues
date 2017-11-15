'use strict';

const Queue = require('../lib/queue');


describe('queue test', () => {

  it('should return a length of 0', () => {

    let newQueue = new Queue();
    expect(newQueue.length).toBe(null);

  });

  it('should return  1 : 3, length: 2, head: null, null: 1 for enqueue', () => {

    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(3);
    expect(newQueue.length).toBe(2);
    expect(newQueue[1]).toBe(3);
    // console.log(newQueue);
  });

  it('should return length: 2, head: 3 for dequeue', () => {

    let newQueue = new Queue();

    newQueue.enqueue(1);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBe(3);
    console.log(newQueue);
    expect(newQueue.dequeue()).toBe(undefined);
    // console.log(newQueue);
  });
});
