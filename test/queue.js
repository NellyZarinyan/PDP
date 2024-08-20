import {Queue} from '../src/ds/queue.js';

const queue = new Queue();

queue.addElement(1);
queue.addElement(2);
queue.addElement(3);
queue.addElement(4);
queue.addElement(5);

console.log('Printing queue:-----');
queue.printQueue();

console.log(queue.removeEl());
console.log(queue.removeEl());

console.log('Printing queue:-----')
queue.printQueue();
