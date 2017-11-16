'use strict';

const Stack = require('./lib/stack.js');
const Queue = require('./lib/queue.js')

let pile = new Stack(1, 2, 3, 4, 5);
console.log(pile);

let line = new Queue(1, 2, 3, 4, 5);
console.log(line);
