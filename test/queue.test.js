const QueueArray = require('../lib/queue/queueArray');
const expect = require('expect');

describe('QueueArray', () => {

    let qArray = new QueueArray();    

    it('should place an object at the end of the queue', (done) => {

        qArray = qArray.enqueue(1);
        qArray = qArray.enqueue(2);
        qArray = qArray.enqueue(3);        
        expect(qArray).toEqual({"queue": [1, 2, 3]});
        expect(qArray.queue[1]).toEqual(2);
        done();

    });

    it('should pop off the first item from the queue', (done) => {
       
        let first = qArray.dequeue();
        expect(first).toEqual(1);
        expect(qArray).toEqual({"queue": [2,3]});
        done();
        
    });

});