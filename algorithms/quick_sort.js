const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right; // Choosing the last element as the pivot
        partitionIndex = partition(array, pivot, left, right);

        // Recursively sort the left and right subarrays
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}


function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];  // The pivot value (last element)
    let partitionIndex = left;       // Start at the left boundary

    for (let i = left; i < right; i++) { // Iterate through the array
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex); // Swap elements
            partitionIndex++; // Move partition index to the right
        }
    }
    swap(array, right, partitionIndex); // Move pivot to its correct position
    return partitionIndex;  // Return pivot's final position
}


function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);