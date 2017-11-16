'use strict';
let NewNode = function(value, next){
    this.value = value;
    this.next = next||null;
}

const linkedList = module.exports = function(node){
    this.head = node||null;
    this.tail = this.head
}

linkedList.prototype.enqueue = function(value){
    if (this.head === null) {
        this.head = new NewNode(value);
        this.tail = this.head
    } 
    this.tail.next = new NewNode(value, null);
    this.tail = this.tail.next;
    // console.log(this.tail.value)
}

linkedList.prototype.dequeue=function(){
    this.head.next = this.head.next.next;
    this.head = this.head.next;
    console.log(this.head.value);
}
