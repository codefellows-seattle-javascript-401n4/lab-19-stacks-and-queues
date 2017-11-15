'use strict';

const Stack = require('../lib/stack.js');
const newStack = new Stack();
const expect = require("expect");

describe('Testing Stack', () => {
    it('Should test that our stack has been created and is empty', done => {
        expect(newStack.length).toEqual(0);
        done();
    });

    it('Should push 3 things into our stack using the push() method', done => {
        newStack.push("A");
        newStack.push("B");
        newStack.push("C");

        expect(newStack.length).toEqual(3);
        done();
    });

    it('Should have correctly ordered the 3 things we pushed into the stack', done => {
        expect(newStack[0]).toEqual("A");
        expect(newStack[1]).toEqual("B");
        expect(newStack[2]).toEqual("C");
        done();
    });

    it('Should pop the last thing off the stack', done => {
        newStack.pop();
        expect(newStack.length).toEqual(2);
        expect(newStack[1]).toEqual("B");
        done();
    });
});

describe('Testing Queue', () => {
    
});