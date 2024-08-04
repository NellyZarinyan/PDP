function selectionSort(arr) {
    let arrLength = arr.length;

    for (let i = 0; i < arrLength - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Unsorted :", arr);
console.log("Sorted array:", selectionSort(arr));
