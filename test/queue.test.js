'use strict';



const Queue = require('../lib/queue/_queue.js');
const expect = require('expect');
//const testQueue = new Queue(); < can i just call it here instead of inputing it for every


describe('queue testing',() => {

  it('should return 1 when done',() => {
    let testQueue = new Queue();
    expect(testQueue.length).toEqual(1);
    console.log(1);

  });


  it('should return 1,2,3', () => {
    let testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(3);

    expect(testQueue.length).toBe(2);
    expect(testQueue[1]).toBe(3);

  });


  it('Should have correctly ordered the 3 things we pushed into the stack', (done) => {
    let testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(3);

    expect(testQueue.length).toBe(2);
    expect(testQueue[1]).toBe(3);

  });


  it('Should dequeue log 1,2,3', () => {
    let testQueue = new Queue();
    queueTest.enqueue(1);
    queueTest.enqueue(3);

    expect(testQueue.length).toEqual(2);
    expect(testQueue._array[0]).toEqual("hello");

  });


});
