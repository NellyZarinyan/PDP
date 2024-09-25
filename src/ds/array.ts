export class ArrayDs<T> {
    private data: T[];;
    private length: number;

    constructor() {
        this.length = 0;
        this.data = []
    }

    /**
     * Pushing new item in array
     * @param item elemet to push in array
     * @returns item which was added to array, and new array
     */
    push(item: T): string | T[] {
        this.data[this.length++] = item;
        return `${item} was added. Now your array is ${this.data}`;
    }

    /**
     * Poping the last item from array
     * @returns item which was poped
     */
    pop(): T | string {
        if (0 === this.length) return 'Array is empty';
        const item = this.data[this.length - 1];
        this.length--;
        const tmpData = new Array(this.length);
        for (let i = 0; i < tmpData.length; i++) {
            tmpData[i] = this.data[i];
        }
        this.data = tmpData;
        return `${item} was deleted`
    }

    /**
     * Priniting an array
     * @returns array
     */
    print() {
        console.log('-----Your array is-----')
        return this.data;
    }

    /**
     * Gen an element by index
     * @param index index to get element
     * @returns element of given index
     */
    getByIndex(index: number): string | T {
        return `Element of ${index} index is ${this.data[index]}`;
    }

    /**
     * Insert an element by index
     * @param item item to add
     * @param index index to add an item
     * @returns added item for passes index
     */
    insertAt(item: T, index: number) {
        const tmpData = new Array(++this.length);
        for (let i = 0, j = 0; i < tmpData.length; i++, j++) {
            if (i == index) {
                console.log(i, j)
                tmpData[i] = item;
                j--;
                continue;
            }
            tmpData[i] = this.data[j];
        }
        this.data = tmpData;
        return `${item} was added under ${index} index`;
    }

    /**
     * Delet an item of passes index
     * @param index index to delet an item 
     * @returns passed index to remove
     */
    deleteAt(index: number) {
        const tmpData = new Array(--this.length);
        for (let i = 0, j = 0; i < this.data.length; i++, j++) {
            if (i === index) {
                j--;
                continue;
            }
            tmpData[j] = this.data[i];
        }
        this.data = tmpData;
        return `Item with ${index} index was deleted`;
    }
}

