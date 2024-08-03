export class Queue {
    public elements: any;
    public frontIndex: number;
    public backIndex: number;
	constructor() {
		this.elements = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
	addElement(el: any) {
		this.elements[this.backIndex] = el
		this.backIndex++;
	}
	removeElement() {
		const el = this.elements[this.frontIndex]
		delete this.elements[this.frontIndex]
		this.frontIndex++
		return el
	}

	printQueue() {
		console.log(this.elements);
	}
}

