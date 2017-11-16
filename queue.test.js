/*global expect */
'use strict';

let Queue = require('./queue.js');

describe('QUEUE', () => {
  let queue = new Queue();
  
  // unshift tests
  test('unshift should add a number to beginning of queue', () => {
    queue.unshift(3);
    queue.unshift(2);
    queue.unshift(1);
    expect(queue.queue[0]).toEqual(1);
  });
  test('unshift should increase length by 1 each time', () => {
    expect(queue.queue.length).toEqual(3);
  });

  // shift tests
  test('shift should remove and return the first item in the queue', () => {
    let expected = queue.shift();
    expect(expected).toBe(1);
  });
  test('shift should reduce length by 1 each time', () => {
    expect(queue.queue.length).toEqual(2);
  });
});