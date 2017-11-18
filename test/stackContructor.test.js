'use strict';

const stackConstructor = require('../stack-constructor');

describe('Stack Contructor', () => {
  it('should implement last in first out functionality', () => {

    let testStack = new stackConstructor();

    testStack.push('a');
    testStack.push('b');
    testStack.push('c');

    expect(testStack.pop()).toEqual('c');
    expect(testStack.pop()).toEqual('b');
    expect(testStack.pop()).toEqual('a');
  });
});
