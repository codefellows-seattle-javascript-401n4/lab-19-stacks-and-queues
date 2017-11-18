'use strict';

const queueConstructor = require('../queue-constructor');

describe('Queue Constructor', () => {
  it('should implement first in first out', () => {
    let testQueue = new queueConstructor();

    testQueue.enqueue('a');
    testQueue.enqueue('b');
    testQueue.enqueue('c');

    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toEqual('b');
    expect(testQueue.dequeue()).toEqual('c');
  });
});
