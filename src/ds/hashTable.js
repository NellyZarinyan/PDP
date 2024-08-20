export class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(element) {
        let hash = 0;
        for (let char of element.toString()) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    addEl(element) {
        const index = this.hash(element);
        if (!this.buckets[index].includes(element)) {
            this.buckets[index].push(element);
        }
    }

    removeEl(element) {
        const index = this.hash(element);
        const bucket = this.buckets[index];
        const elementIndex = bucket.indexOf(element);
        if (elementIndex !== -1) {
            bucket.splice(elementIndex, 1);
        }
    }

    printTable() {
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}: ${bucket.join(', ')}`);
        });
    }
}

