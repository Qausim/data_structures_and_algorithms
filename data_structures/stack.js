// function push, pop, peek, length

class Stack {
    constructor() {
        this.values = [];
    }

    push(value) {
        this.values.push(value);
    }

    pop(value) {
        return this.values.pop();
    }

    peek() {
        return this.values[this.values.length - 1];
    }

    length() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length == 0;
    }
}

module.exports = {Stack};

// let numStack = new Stack();
// console.log(numStack.peek()); // undefined
// numStack.push(1);
// numStack.push(5);
// numStack.push(12);
// numStack.push(15);
// console.log(numStack);
// console.log(numStack.peek());
// console.log(numStack.pop());
// console.log(numStack);
// console.log(numStack.length());