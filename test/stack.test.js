'use strict';

const stackArray = require('../lib/stack/stackArray');
const stackConstructor = require('../lib/stack/stackConstructor');
const expect = require('expect');

describe('Stacks', () => {

    let stackTypes = {
        
      "object": new stackConstructor,
      "array": new stackArray(),
        
    }

    for(let type in stackTypes){

        it(`${type} pushes item to end of stack`, () => {

            let testStack = stackTypes[type];            

            testStack.push(1);
            testStack.push(2);
            testStack.push(3);

            expect(testStack).not.toBe.empty;
            expect(testStack.pop()).toEqual(3);

        });
        
    }    

})



