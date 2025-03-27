const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    let length = array.length;
    if (length === 1) return array;
    let middle = Math.floor(length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}



function merge(left, right) {
    let result = [];
    let leftPtr = 0;
    let rightPtr = 0;

    while (leftPtr < left.length && rightPtr < right.length) {
        if (left[leftPtr] < right[rightPtr]) {
            result.push(left[leftPtr])
            leftPtr++;
        } else {
            result.push(right[rightPtr])
            rightPtr++;
        }
    }
    return result.concat(left.slice(leftPtr).concat(right.slice(rightPtr)));


}

const answer = mergeSort(numbers);
console.log(answer);