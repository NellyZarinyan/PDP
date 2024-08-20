import { LinkedList } from "../src/ds/linkedList.js";


const linkedList = new LinkedList();
linkedList.addElement(1);
linkedList.addElement(2);
linkedList.addElement(3);
linkedList.addElement(4);
linkedList.addElement(5);

console.log('printing list')
linkedList.printList();

linkedList.removeEl(4);

console.log('printing list')

linkedList.printList();


