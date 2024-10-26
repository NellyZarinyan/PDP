export class Stack<T> {
    lastIndex: number;
    capacity: number;
    stack: T[];

    constructor(capacity: number) {
        this.lastIndex = -1;
        this.capacity = capacity;
        this.stack = Array(capacity);
    }

    /**
     * Returns true or false depending on lastIndex
     * @returns true or false
     */
    isEmpty(): boolean {
        return (this.lastIndex < 0);
    }

    /**
    * Returns true or false depending on lastIndex and capacity
    * @returns true or false
    */
    isStackOverflow(): boolean {
        return (this.lastIndex + 1 == this.capacity);
    }

    /**
     * Push an element to stack
     * @param element to add in stack
     * @returns an added element
     */
    push(element: T): string {
        if (this.isStackOverflow()) {
            return 'Stack is full'
        }
        this.stack[++this.lastIndex] = element;
        return `${element} added in stack`;
    }

    /**
     * Returns an last added element
     * @returns an removed element
     */
    pop(): string {
        if (this.isEmpty()) {
            return "Stack is empty. No element to remove."
        }
        const removedElement = this.stack[this.lastIndex];
        const tmpStack = new Array(this.capacity);
        for (let i = 0; i < this.lastIndex; i++) {
            tmpStack[i] = this.stack[i];
        }
        this.stack = tmpStack;
        this.lastIndex--;
        return `The last element -> ${removedElement} was removed from stack`;
    }

    /**
     * Peek an last element
     * @returns the last element
     */
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty. No element to peek."
        }
        return this.stack[this.lastIndex];
    }

    /**
     * Printing stack
     */
    printStack(): void {
        console.log('----Printing stack----');
        for (let i = 0; i < this.lastIndex + 1; i++) {
            console.log(this.stack[i]);
        }
    }
}

