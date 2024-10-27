export class Map<T> {
    private elements: { [key: string]: T };

    /**
     * Initializes a new instance of the Map class with an empty elements object.
     */
    constructor() {
        this.elements = {};
    }

    /**
     * Adds a key-value pair to the map.
     * @param key - The key to associate with the value.
     * @param value - The value to be added to the map.
     */
    addValue(key: string, value: T): void {
        this.elements[key] = value;
    }
    
    /**
     * Removes an entry from the map by its key.
     * @param key - The key of the entry to remove.
     * If the key does not exist in the map, it logs a message.
     */
    removeKey(key: string): void {
        if (key in this.elements) {
            delete this.elements[key];
        } else {
            console.log(`Key "${key}" not found.`);
        }
    }

    /**
     * Removes the first occurrence of a specific value from the map.
     * @param value - The value to remove from the map.
     * If the value is not found in the map, it logs a message.
     */
    removeByValue(value: T): void {
        const keys = Object.keys(this.elements);
        for (const key of keys) {
            if (this.elements[key] === value) {
                delete this.elements[key];
                return; // Remove only the first occurrence
            }
        }
        console.log(`Value "${value}" not found.`);
    }
    
    /**
     * Logs the entire map to the console.
     * Useful for visualizing the current state of the map.
     */
    printMap(): void {
        console.log(this.elements);
    }
}
