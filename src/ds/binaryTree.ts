class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
      this.value = value;
  }
}

// Define the Binary Search Tree class
export class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Insert a value into the BST
  insert(value: T): void {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  // Remove a value from the BST
  remove(value: T): void {
      this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
      if (node === null) {
          return null;
      }

      if (value < node.value) {
          node.left = this.removeNode(node.left, value);
      } else if (value > node.value) {
          node.right = this.removeNode(node.right, value);
      } else {
          // Node with only one child or no child
          if (node.left === null) {
              return node.right;
          } else if (node.right === null) {
              return node.left;
          }

          // Node with two children: Get the inorder successor (smallest in the right subtree)
          node.value = this.findMinValue(node.right);
          node.right = this.removeNode(node.right, node.value);
      }

      return node;
  }

  private findMinValue(node: TreeNode<T>): T {
      let currentNode = node;
      while (currentNode.left !== null) {
          currentNode = currentNode.left;
      }
      return currentNode.value;
  }

  // In-order traversal to print the tree
  printTree(): void {
      this.inOrderTraversal(this.root);
  }

  private inOrderTraversal(node: TreeNode<T> | null): void {
      if (node !== null) {
          this.inOrderTraversal(node.left);
          console.log(node.value);
          this.inOrderTraversal(node.right);
      }
  }
}

