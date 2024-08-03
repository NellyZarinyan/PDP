class Node{
    public element: any;
    public next: any;

    constructor(element) {
        this.element = element,
        this.next = null
    }
}


export class LinkedList {
    public head: any;
    public size: number;
    constructor() {
		this.head = null;
		this.size = 0;
	}


    addElement(element: any) {
        let node = new Node(element);

        if (this.size == 0) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    deleteElement(element) {
        //TODO
    }

    listSize () {
		console.log(`Size is ${this.size}`);
	}


	printList() {
		let curr = this.head;
		while (curr) {
            console.log(curr.element);
			curr = curr.next;
		}
	}
}
