'use strict';

const expect = require('expect')

const Stack = require('../lib/stack.js');

let stack = new Stack();

describe('STACK', () => {
  test('push adds a value', () => {
    stack.push(1);
    expect(stack.stack[0]).toEqual(1);
  });
  test('push increases length by 1', () => {
    expect(stack.stack.length).toEqual(1);
  });

  test('pop returns the last thing on the stack', () => {
    let expected = stack.pop();
    expect(expected).toEqual(1);
  });
  test('pop should decrease length by 1', () => {
    expect(stack.stack.length).toEqual(0);
  });
});
