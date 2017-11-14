'use strict';

const mocha = require('mocha');
const expect = require('expect');
const Queue = require('../lib/queueConstructor.js');


describe('queue test', () => {
  it('should return a length of 0', () => {
    let queueTest = new Queue();
    expect(queueTest.length).toBe(0);
  });
  it('should return 1,2,3 for enqueue', () => {
    let queueTest = new Queue();
    queueTest.enqueue(1);
    queueTest.enqueue(3);
    expect(queueTest.length).toBe(2);
    expect(queueTest[1]).toBe(3);
  });
  it('should return 1,2,3 for dequeue', () => {
    let queueTest = new Queue();
    queueTest.enqueue(1);
    queueTest.enqueue(3);
    expect(queueTest.dequeue()).toBe(1);
    expect(queueTest.dequeue()).toBe(3);
    expect(queueTest.dequeue()).toBe(undefined);
  });
});
