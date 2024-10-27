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
     * Poping  the last element from array
     * @returns deleted item
     */
    pop(): T | string {
        if (!this.length) return 'Array is empty';
        const item = this.data[this.length - 1];
        const tmpData = new Array(--this.length);
        for (let i = 0; i < tmpData.length; i++) {
            tmpData[i] = this.data[i];
        }
        this.data = tmpData;
        return `${item} was deleted`
    }

    /**
     * Printing an array
     * @returns array
     */
    print() {
        console.log('-----Your array is-----')
        return this.data;
    }

    /**
     * Get an elment by given index
     * @param index to get an element
     * @returns an element by given index
     */
    getByIndex(index: number): string | T {
        return `Element of ${index} index is ${this.data[index]}`;
    }

    /**
     * Insert an element by given index
     * @param item to add in array
     * @param index to add an item by given index
     * @returns an item an given index
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

    /*
     * Second method
     */
    // insertAt(item: T, index: number) {
    //     const tmpData = new Array(++this.length);
    //     for (let i = 0; i < tmpData.length; i++) {
    //         if (i < index) {
    //             tmpData[i] = this.data[i];
    //         } else if (i == index) {
    //             tmpData[i] = item;
    //         } else {
    //             tmpData[i] = this.data[i - 1];
    //         }
    //     }
    //     this.data = tmpData;
    //     return `${item} was added under ${index} index`;
    // }

    /**
     * Delete an item by given index
     * @param index to delet an item
     * @returns an given index
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


