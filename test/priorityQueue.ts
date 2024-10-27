import { PriorityQueue } from "../src/ds/priorityQueue";

const testArray = new PriorityQueue()

console.log(testArray.enqueue('DDDD', 1));

console.log(testArray.enqueue('a',4));
console.log(testArray.enqueue('b', 2));
console.log(testArray.enqueue('c', 3));
console.log(testArray.enqueue('D', 1));

console.log(testArray.print());
console.log(testArray.dequeue());
console.log(testArray.print());
