export class HashTable<T> {
    private size: number;
    private buckets: T[][];

    /**
     * Initializes a new instance of the HashTable with a specified size.
     * @param size - The number of buckets in the hash table. Defaults to 10.
     */
    constructor(size: number = 10) {
        this.size = size;
        // Initialize each bucket as an empty array.
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    /**
     * Generates a hash for the given element, mapping it to a specific bucket index.
     * @param element - The element to hash.
     * @returns The index of the bucket where the element should be stored.
     */
    private hash(element: T): number {
        let hash = 0;
        const stringElement = String(element); // Convert element to string for consistent hashing.
        
        // Calculate hash by summing the character codes of each character.
        for (const char of stringElement) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        
        return hash;
    }

    /**
     * Adds an element to the hash table if it is not already present in the bucket.
     * @param element - The element to add.
     */
    addEl(element: T): void {
        const index = this.hash(element);
        const bucket = this.buckets[index];
        
        // Add the element only if it does not already exist in the bucket.
        if (!bucket.includes(element)) {
            bucket.push(element);
        }
    }

    /**
     * Removes an element from the hash table if it exists.
     * @param element - The element to remove.
     */
    removeEl(element: T): void {
        const index = this.hash(element);
        const bucket = this.buckets[index];
        const elementIndex = bucket.indexOf(element);

        // Remove the element if it is found in the bucket.
        if (elementIndex !== -1) {
            bucket.splice(elementIndex, 1);
        }
    }

    /**
     * Prints the contents of each bucket in the hash table to the console.
     * Each bucket index is displayed along with its elements.
     */
    printTable(): void {
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}: ${bucket.join(', ')}`);
        });
    }
}
