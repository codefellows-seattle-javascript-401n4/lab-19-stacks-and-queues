'use strict';
const linkedList = require('./lib/queue-constructor');

let listOne = new linkedList;


console.log("after enqueue ");
for(let i = 1; i<4; i++){
    listOne.enqueue(i)
}

console.log("after dequeue ");  
for(let i = 1; i<4; i++){
    listOne.dequeue();
}