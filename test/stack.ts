import {Stack} from '../src/ds/stack'

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log('Print stack:')
stack.printStack();

stack.pop();
stack.pop();

console.log('Print stack:')
stack.printStack();
