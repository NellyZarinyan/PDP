class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }

    addElement(element) {
        const node = new Node(element);
        let tmp = this.head;
        if (this.head == null) {
            this.head = node;
        } else {
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = node;
        }
    }

    removeEl(element) {
        let tmp = this.head;
        let tmpPrev = null;

        if (tmp != null && tmp.value == element) {
            this.head = tmp.next;
            return;
        }

        while (tmp != null && tmp.value != element) {
            tmpPrev = tmp;
            tmp = tmp.next;
        }

        if (tmp == null) {
            console.log("Element not found in the list.");
            return;
        }

        tmpPrev.next = tmp.next;
    }

    printList () {
        let tmp = this.head;
        while  (tmp != null) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
}
