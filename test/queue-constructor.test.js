'use strict';

const LL = require('../lib/queue-constructor');
const expect = require('expect');

describe('Linked List', ()=>{

    it('should return a tail of a linked after enqueue', ()=>{
      let llTest = new LL();
      for(let i = 1; i<4; i++){
        llTest.enqueue(i)
        console.log(llTest);
    }
      expect(llTest.tail).not.toBe(null)
    })
})
