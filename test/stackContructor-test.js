'use strict';

const mocha = require('mocha');
const expect = require('expect');
const Stack = require('../lib/stackContructor.js');


describe('stack constructor', () => {
  it('should return a length of 0', () => {
    let newStack = new Stack();
    expect(newStack.length).toBe(0);
  });
  it('should return 1,2,3 for pushing on elements into the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack[0]).toBe(1);
    expect(newStack[1]).toBe(2);
    expect(newStack[2]).toBe(3);
  });
  it('should return 3,2,1 for popping off elements', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.pop()).toBe(3);
    expect(newStack.pop()).toBe(2);
    expect(newStack.pop()).toBe(1);
    expect(newStack.pop()).toBe(undefined);
  });
});
