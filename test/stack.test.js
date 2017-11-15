'use strict';

const Stack = require('../lib/stack');

describe('Stacks', () => {
 
  it('newStack should have length of 0', () => {

    let newStack = new Stack();
    expect(newStack.length).toBe(null);

  });

  it('should PUSH new element (1, 2, 3) on the stack', () => { 

    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.push(3);

    expect(newStack[0]).toBe(1);
    expect(newStack[1]).toBe(2);
    expect(newStack[2]).toBe(3);

  });
    
  it('should POP  last element (3, 2, 1) from the stack', () => {

    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
  
    expect(newStack.pop()).toEqual(3);
    expect(newStack.pop()).toEqual(2);
    expect(newStack.pop()).toEqual(1);
  });
  
});

