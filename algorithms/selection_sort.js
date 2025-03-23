const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        let smallest = [i, arr[i]];
        for (let j = i; j < length; j++) {
            if (arr[j] < smallest[1]) {
                smallest[1] = arr[j]
                smallest[0] = j
            }
        }
        [arr[i], arr[smallest[0]]] = [smallest[1], arr[i]]
    }
}

selectionSort(numbers);
console.log(numbers);