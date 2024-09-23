class Map {
    constructor() {
        this.elements = {};
    }

    addValue(key, value) {
        this.elements[key] = value;
    }
    
    removeKey(key) {
        if (key in this.elements) {
            delete this.elements[key];
        } else {
            console.log(`Key "${key}" not found.`);
        }
    }

    removeByValue(value) {
        const keys = Object.keys(this.elements);
        for (const key of keys) {
            if (this.elements[key] === value) {
                delete this.elements[key];
                return; // Remove only the first occurrence
            }
        }
        console.log(`Value "${value}" not found.`);
    }
    
    printMap() {
        console.log(this.elements);
    }
}

