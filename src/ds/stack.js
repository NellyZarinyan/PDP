export class Stack {
    constructor() {
        this.lastIn = -1;
        this.elements = [];
    }

    addElement(el) {
        this.lastIn += 1;
        this.elements[this.lastIn] = el;
    }

    removeEl() {
        if (this.lastIn < 0) {
            console.log("Stack is empty. No elements to remove.");
            return null;
        }
        const removedElement = this.elements[this.lastIn];
        this.elements[this.lastIn] = undefined;
        this.lastIn--;
        return `${removedElement} element was removed from stack`;
    }

    printStack(){
        console.log(this.elements);
    }
}
