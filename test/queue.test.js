'use strict';

const Queue = require("../queue");

describe("Queue", () => {
  it('should implement first in first out functionality', () => {
    let testQueue = new Queue();

      testQueue.enqueue('x');
      testQueue.enqueue('y');
      testQueue.enqueue('z');
      console.log('testQueue' + testQueue);
      expect(testQueue.dequeue()).toEqual('x');
      expect(testQueue.dequeue()).toEqual('y');
      expect(testQueue.dequeue()).toEqual('z');
  });
});
