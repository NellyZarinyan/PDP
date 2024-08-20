import {HashTable} from '../src/ds/hashTable.js';

const hashTable = new HashTable();

hashTable.addEl(1);
hashTable.addEl(2);
hashTable.addEl(15);
hashTable.addEl(20);
hashTable.addEl(2);
hashTable.addEl(1);

console.log('Printing hash table:-----');
hashTable.printTable();
hashTable.removeEl(15);
console.log('Printing hash table:-----');
hashTable.printTable();