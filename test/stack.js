import { Stack } from "../src/ds/stack.js";

const myStack = new Stack();
myStack.addElement(1);
myStack.addElement(2);
myStack.addElement(4);
myStack.addElement(6);
console.log('Printing stack:----');
myStack.printStack();
console.log(myStack.removeEl());
console.log('Printing stack:----');
myStack.printStack();

