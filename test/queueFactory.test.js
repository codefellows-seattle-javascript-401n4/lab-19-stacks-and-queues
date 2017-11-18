'use strict';

const queueFactory = require('../queue-factory');

describe('Queue factory', () => {
  it('should implement first in first out functionality', () => {

    let testQueue = queueFactory();

    testQueue.enqueue('x');
    testQueue.enqueue('y');
    testQueue.enqueue('z');
    expect(testQueue.dequeue()).toEqual('x');
    expect(testQueue.dequeue()).toEqual('y');
    expect(testQueue.dequeue()).toEqual('z');
  });
});
