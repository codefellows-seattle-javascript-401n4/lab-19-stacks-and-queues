'use strict';

const stackFacade = require('../lib/stack-facade.js');

describe('Stack tests', function(){

  test('PUSH should correctly insert value to end of stack', function(){
    let stackTest = new stackFacade();

    stackTest.push('first');
    stackTest.push('second');
    stackTest.push('third');

    expect(stackTest.stackFacade.stack[0]).toEqual('first');
    expect(stackTest.stackFacade.stack[1]).toEqual('second');
    expect(stackTest.stackFacade.stack[2]).toEqual('third');
  });

  test('POP should correctly remove value from end of stack', function(){
    let stackTest = new stackFacade();

    stackTest.push('first');
    stackTest.push('second');
    stackTest.push('third');

    expect(stackTest.pop()).toEqual('third');
  });

});
