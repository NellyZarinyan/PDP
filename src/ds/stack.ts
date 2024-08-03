export class Stack {
    public elements = []
    constructor () {
        this.elements = [];
    }

    push (element: any) {
        return this.elements.push(element);
    }
    pop () {
        return this.elements.pop();
    }
    // printStack function
    printStack() {
        for (let i = 0; i < this.elements.length; i++){
            console.log(this.elements[i]);
        }
    }

}