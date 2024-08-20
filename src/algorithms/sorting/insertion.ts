function insertionSort(arr) {

    for (let i = 1; i <  arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

let arr1 = [64, 25, 12, 22, 11];
console.log("Unsorted array:", arr1);
console.log("Sorted array:", insertionSort(arr1));
