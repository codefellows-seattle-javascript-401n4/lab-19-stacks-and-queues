'use strict';

const Queue = require('../lib/queue.js');
const expect = require('expect');
const newQueue = new Queue();

describe('Test Queue', () => {
    it('Should test that our queue has been created and is empty', done => {
        expect(newQueue.length).toEqual(0);
        done();
    }); 

    it('Should push 3 things into our stack using the enqueue() method', done => {
        newQueue.enqueue("A");
        newQueue.enqueue("B");
        newQueue.enqueue("C");

        expect(newQueue.length).toEqual(3);
        done();
    });

    it('Should have correctly ordered the 3 things we pushed into the stack', done => {
        expect(newQueue._array[0]).toEqual("A");
        expect(newQueue._array[1]).toEqual("B");
        expect(newQueue._array[2]).toEqual("C");
        done();
    });

    it('Should remove the first thing from the queue', done => {
        newQueue.dequeue();
        expect(newQueue.length).toEqual(2);
        expect(newQueue._array[0]).toEqual("B");
        done();
    });
});