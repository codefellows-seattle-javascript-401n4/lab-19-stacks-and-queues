'use strict';

const queueFacade = require('../lib/queue-facade.js');

describe('Queue tests', function(){

  test('CONSTRUCTOR should make new array', function(){
    let queueTest = new queueFacade();

    expect(queueTest.queueFacade.queue).toEqual([]);
  });

  test('PUSH should correctly insert value to end of queue', function(){
    let queueTest = new queueFacade();

    queueTest.push('first');
    queueTest.push('second');
    queueTest.push('third');

    expect(queueTest.queueFacade.queue[0]).toEqual('first');
    expect(queueTest.queueFacade.queue[1]).toEqual('second');
    expect(queueTest.queueFacade.queue[2]).toEqual('third');
  });

  test('REMOVE should correctly remove value from beginning of queue', function(){
    let queueTest = new queueFacade();

    queueTest.push('first');
    queueTest.push('second');
    queueTest.push('third');

    queueTest.queueFacade.remove();

    expect(queueTest.queueFacade.queue[0]).toEqual('second');
    expect(queueTest.queueFacade.queue[1]).toEqual('third');
    expect(queueTest.queueFacade.queue[2]).toEqual(undefined);
  });

});
