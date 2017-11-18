'use strict';

const stackConstructorArray = require('../stack-constructor-array');

describe('Stack-Constructor_Array', () => {
  it('should implement last in first out', () => {

    let testStack = new stackConstructorArray();

    testStack.push('a');
    testStack.push('b');
    testStack.push('c');

    expect(testStack.pop()).toEqual('c');
    expect(testStack.pop()).toEqual('b');
    expect(testStack.pop()).toEqual('a');
  });
});
