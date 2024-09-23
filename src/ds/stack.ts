export class Stack<T> {
    lastIndex: number;
    capacity: number;
    stack: T[];

    constructor(capacity: number) {
        this.lastIndex = -1;
        this.capacity = capacity;
        this.stack = Array(capacity);
    }

    isEmpty(): boolean {
        return (this.lastIndex < 0);
    }

    isArrayOverflow(): boolean {
        return (this.lastIndex + 1 == this.capacity);
    }

    push(el: T): string {
        if (this.isArrayOverflow()) {
            return 'Stack is full'
        }
        this.stack[++this.lastIndex] = el;
        return `${el} added in stack`;
    }

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

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty. No element to peek."
        }
        return this.stack[this.lastIndex];
    }

    printStack(): void {
        console.log('----Printing stack----');
        for (let i = 0; i < this.lastIndex + 1; i++) {
            console.log(this.stack[i]);
        }
    }
}
