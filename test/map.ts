import { Map } from '../src/ds/map'; // Adjust the import path as needed

const testMap = new Map<number>();

console.log("Adding key-value pairs to the map:");
testMap.addValue("one", 1);
testMap.addValue("two", 2);
testMap.addValue("three", 3);
testMap.printMap();

console.log("\nRemoving an existing key ('two'):");
testMap.removeKey("two");
testMap.printMap();

console.log("\nAttempting to remove a non-existing key ('four'):");
testMap.removeKey("four");

console.log("\nRemoving an existing value (3):");
testMap.removeByValue(3);
testMap.printMap();

console.log("\nAttempting to remove a non-existing value (10):");
testMap.removeByValue(10);

console.log("\nFinal state of the map:");
testMap.printMap();
