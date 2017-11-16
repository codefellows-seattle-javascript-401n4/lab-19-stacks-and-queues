'use strict';

const LL = require('../lib/queue-constructor');
const expect = require('expect');
let llTest = new LL();

describe('Linked List', ()=>{

    it('should return a tail of a linked list after enqueue', ()=>{
      
      for(let i = 1; i<4; i++){
        llTest.enqueue(i)
        expect(llTest.tail.value).toEqual(i)
    }
    // console.log('tail in test:', llTest.tail);
      
    })
   
    it("should remove the head if a list via dequeue",()=>{
      llTest.dequeue();
      expect(llTest.head.value).toEqual(2);

    })
})
