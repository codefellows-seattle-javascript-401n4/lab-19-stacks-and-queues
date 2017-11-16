'use strict';
const testStack = require('../lib/stack-constructor');
const expect = require('expect');
let tStack = new testStack;
describe("Stack constructor ", ()=>{
    it("should add provided values to array via push", ()=>{
        tStack.push(7);
        console.log(tStack);
        expect(tStack.stack[0]).toEqual(7);
    })
    it("should remove last element of array via pop()", ()=>{
       let pop = tStack.pop();
       expect(pop).toEqual(7);
    })
})