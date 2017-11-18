'use strict';

const stackFactory = require('../stack-factory');

describe('Stack Factory', () => {
  it('should implement last in first out functionality', () => {
    let testStackFactory = stackFactory();

    testStackFactory.push('a');
    testStackFactory.push('b');
    testStackFactory.push('c');

    expect(testStackFactory.pop()).toEqual('c');
    expect(testStackFactory.pop()).toEqual('b');
    expect(testStackFactory.pop()).toEqual('a');
  });
});
