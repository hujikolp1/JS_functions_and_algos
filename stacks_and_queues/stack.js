//==============================================================================

class Stack {
  constructor() {
    this.stack = [];
  }
  push(elem) {
    this.stack.push(elem);
  }
  pop() {
    if (this.stack.length == 0) {
      return "Empty Stack";
    }
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      if (i == this.stack.length - 1) {
        str += this.stack[i] + " ";
      }
      else {
        str += this.stack[i] + ", ";
      }
    }
    console.log("Stack Elements: ");
    return str;
  }
}

//==============================================================================

let stackInst = new Stack();
stackInst.push(42);
stackInst.push("ice cream");
stackInst.push("nvidia GPU");
stackInst.push("overcast");
stackInst.push(true);
stackInst.push("pine");
console.log(stackInst.printStack());
console.log(stackInst.pop());
console.log(stackInst.peek());
console.log(stackInst.isEmpty());
console.log(stackInst.printStack());

//==============================================================================
