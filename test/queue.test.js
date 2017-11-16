'use strict';


const Queue = require('../lib/queue');
const expect = require('expect');


describe('queue testing', () => {

  let newQueue = new Queue();

  it('should return 0', () => {
    expect(newQueue.length).toBe(null);
  });

  it('should return 1:3, length:2, head:null, null:1', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1),
    newQueue.enqueue(3),
    expect(newQueue.length).toBe(2),
    expect(newQueue[1].toBe(3)
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
