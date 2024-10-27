function selectionSort(arr: number[]): number[] {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Unsorted array:", arr);
console.log("Sorted array:", selectionSort(arr));
