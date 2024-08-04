function bubbleSort(arr) {
    let arrLength = arr.length;

    for (let i = 0; i < arrLength - 1; i++) {
        let swapped = false;

        for (let j = 0; j < arrLength - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

let array = [64, 25, 12, 22, 11];
console.log("Unsorted :", array);
console.log("Sorted array:", bubbleSort(array));
