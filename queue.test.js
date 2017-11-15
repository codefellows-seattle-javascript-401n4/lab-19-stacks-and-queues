'use strict';

module.edports = class Queue {
    constructor() {
    	this.queue = [];
    }
    
    unshift(value) {
    	this.queue.unshift(value);
    }
    
    shift() {
    	this.queue.shift();
    }
}