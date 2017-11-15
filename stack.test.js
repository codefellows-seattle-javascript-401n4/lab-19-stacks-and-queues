/*global expect*/
'use strict';

const Stack = require('./stack.js');

describe('STACK', () => {
  let stack = new Stack();
  
  test('push adds a value', () => {
    stack.push(1);
    expect(stack[0]).toEqual(1);
  });
});