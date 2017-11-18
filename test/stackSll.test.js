'use strict';

const stackSll = require('../stack-sll');

describe('Stack Sll', () => {
  it('should implement last in first out functionality', () => {

    let testStack = stackSll();

    testStack.push('x');
    testStack.push('y');
    testStack.push('z');

    expect(testStack.pop()).toEqual('z');
    expect(testStack.pop()).toEqual('y');
    expect(testStack.pop()).toEqual('x');
  });
});
