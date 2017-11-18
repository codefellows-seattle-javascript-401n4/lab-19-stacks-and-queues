'use strict';

const queueConstructorArray = require('../queue-constructor-array');

describe('Queue Constructor Array', () => {
  it('should implement first in first out', () => {

    let queueTest = new queueConstructorArray();

    queueTest.enqueue('a');
    queueTest.enqueue('b');
    queueTest.enqueue('c');

    expect(queueTest.dequeue()).toEqual('a');
    expect(queueTest.dequeue()).toEqual('b');
    expect(queueTest.dequeue()).toEqual('c');
  });
});
