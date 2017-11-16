'use strict';
// const linkedList = require('./lib/queue-constructor');
const stackConst = require('./lib/stack-constructor');

// let listOne = new linkedList;

// console.log("after enqueue ");
// for(let i = 1; i<4; i++){
//     listOne.enqueue(i)
// }

// console.log("after dequeue ");  
// for(let i = 1; i<4; i++){
//     listOne.dequeue();
// }

let stack = new stackConst;
stack.push(5);
console.log("after push:", stack);
console.log("after pop", stack.pop());