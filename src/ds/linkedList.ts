class Node<T> {
    value: T;
    next: Node<T> | null;

    /**
     * Initializes a new instance of the Node class with a value.
     * @param value - The value to store in the node.
     */
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;

    /**
     * Initializes a new, empty LinkedList.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new element to the end of the linked list.
     * @param element - The value to be added to the list.
     */
    addElement(element: T): void {
        const node = new Node(element);
        if (this.head === null) {
            // If the list is empty, the new node becomes the head.
            this.head = node;
            return;
        }

        // Traverse to the end of the list and add the new node.
        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = node;
    }

    /**
     * Removes the first occurrence of an element from the linked list.
     * @param element - The value to be removed from the list.
     * Logs a message if the element is not found.
     */
    removeElement(element: T): void {
        let tmp = this.head;
        let tmpPrev: Node<T> | null = null;

        // Check if the head node holds the value to remove.
        if (tmp !== null && tmp.value === element) {
            this.head = tmp.next; // Move head to the next node.
            return;
        }

        // Traverse the list to find the node to remove.
        while (tmp !== null && tmp.value !== element) {
            tmpPrev = tmp;
            tmp = tmp.next;
        }

        // If the element is not found, log a message.
        if (tmp === null) {
            console.log("Element not found in the list.");
            return;
        }

        // Remove the node by adjusting the previous node's pointer.
        if (tmpPrev !== null) {
            tmpPrev.next = tmp.next;
        }
    }

    /**
     * Prints all elements of the linked list to the console.
     * Useful for viewing the current contents of the list.
     */
    printList(): void {
        let tmp = this.head;
        while (tmp !== null) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
}
