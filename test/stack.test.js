'use strict';

const Stack = require("../stack");

describe("Stacks", () => {
  it('should implement last in first out functionality', () => {
    let testStack = new Stack();

    testStack.push('a');
    testStack.push('b');
    testStack.push('c');

    expect(testStack.pop()).toEqual('c');
    expect(testStack.pop()).toEqual('b');
    expect(testStack.pop()).toEqual('a');
  });
});
