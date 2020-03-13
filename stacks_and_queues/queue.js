//==============================================================================

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(elem) {
    this.queue.push(elem);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Empty Queue";
    }
    return this.queue.shift();
  }
  front() {
    if (this.isEmpty()) {
      return "Empty Queue";
    }
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length == 0;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      if (i == this.queue.length - 1) {
        str += this.queue[i];
      }
      else {
        str += this.queue[i] + ", ";
      }
    }
    return str;
  }
}

//==============================================================================

let queueInst = new Queue();
queueInst.enqueue("first");
queueInst.enqueue("second");
queueInst.enqueue("third");
queueInst.enqueue("happy days");
console.log(queueInst.printQueue());
queueInst.dequeue();
console.log(queueInst.front());
console.log(queueInst.isEmpty());
console.log(queueInst.printQueue());

//==============================================================================
