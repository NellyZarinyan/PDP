import { Stack } from "../src/ds/stack";

const myStack = new Stack(10);
myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();
