import { BinarySearchTree } from "../src/ds/binaryTree";

const bst = new BinarySearchTree<number>();

// Insert values into the BST
bst.insert(12);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(1);
bst.insert(9);
bst.insert(8);
bst.insert(11);

console.log("Tree after insertions:");
bst.printTree();

// Remove a value from the BST
bst.remove(5);
console.log("\nTree after removing 20:");
bst.printTree();
