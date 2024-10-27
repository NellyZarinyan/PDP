import {ArrayDs} from '../src/ds/array'

const testArray = new ArrayDs()


console.log(testArray.push(1));
console.log(testArray.push(2));
console.log(testArray.push(3));
console.log(testArray.push(4));
console.log(testArray.push(5));

console.log(testArray.print());
console.log(testArray.insertAt(77, 0));
console.log(testArray.print());
console.log(testArray.insertAt(78, 1));
console.log(testArray.print());
console.log(testArray.insertAt(76, 0));



console.log(testArray.print());

console.log(testArray.pop());
console.log(testArray.print());
console.log(testArray.push(2));
console.log(testArray.push(5));
console.log(testArray.print());
console.log(testArray.deleteAt(2));
console.log(testArray.print());

