export class ArrayDs<T> {
    private data:  T[];;
    private length: number;

    constructor() {
        this.length = 0;
        this.data = []
    }

    addItem(item: T): string | T[] {
        this.data[this.length] = item;
        this.length++;
        return `${item} was added. Now your array is ${this.data}`;
    }

    popItem(): T | string {
        if(this.length==0 ) return 'Array is empty';
        const ietm = this.data[this.length-1]
        this.data[this.length-1] = undefined as unknown as T;
        this.length--;
        return `Poped element is: ${ietm}`;
    }

    getLengt(): string {
        return `Array length is: ${this.length}`;
    }

    print(): string | T{
        return `Your array is: ${this.data}`;
    }

    getByIndex(index:number): string | T {
        return `Element of ${index} index is ${this.data[index]}`;
    }
}

