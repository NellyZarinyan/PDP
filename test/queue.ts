import {Queue} from '../src/ds/queue';

const queue = new Queue(10);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.printingQueue();

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.printingQueue();
