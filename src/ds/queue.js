export class Queue {
    constructor() {
        this.firstIn = 0;
        this.lastIn = 0;
        this.elements = [];
    }

    addElement(el) {
        this.elements[this.lastIn] = el;
        this.lastIn++;
    }

    removeEl() {
        if (this.firstIn == this.lastIn) {
            console.log("Queue is empty. No elements to remove.");
            return null;
        }
        const removedElement = this.elements[this.firstIn];
        this.elements[this.firstIn] = undefined;
        this.firstIn++;

        if (this.firstIn === this.lastIn) {
            this.firstIn = 0;
            this.lastIn = 0;
            this.elements = [];
        }

        return `${removedElement} element was removed from the queue`;
    }

    printQueue() {
        console.log(this.elements);
    }
}
