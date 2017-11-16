'use strict';


const Queue = require('../lib/queue');


describe('queue testing', () => {
  it('should return 0', () => {
    let newQueue = new Queue();
    expect(newQueue.length).toBe(null);
  });

  it('should return 1:3, length:2, head:null, null:1', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(3);
    expect(newQueue.length).toBe(2);
    expect(newQueue[1].toBe(3);
  });

  


}
