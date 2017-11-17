'use strict';

const queue = require('../queue-sll');

describe('Queue Sll', () => {
  it('should implement first in first out functionality', () => {
    //
    let testQueue = [];

    // queueSll.enqueue('x');
    testQueue.push(queue.enqueue('x'));
    console.log(`testQueue`, testQueue);
    // testQueue.queueSll.enqueue('y');
    // testQueue.queueSll.enqueue('z');
    // expect(testQueue.dequeue()).toEqual('x');
    // expect(testQueue.dequeue()).toEqual('y');
    // expect(testQueue.dequeue()).toEqual('z');
  });
});
