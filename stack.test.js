/*global expect*/
'use strict';

const Stack = require('./stack.js');

describe('STACK', () => {
  test('constructor creates an empty array', () => {
    let stack = new Stack();
    expect(typeof stack).toBe('array');
  });
});