async function parallelMergesort(arr) {
    // If the array is empty or has one element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Sort the left and right halves concurrently using promises
    const [sortedLeft, sortedRight] = await Promise.all([
        parallelMergesort(left),
        parallelMergesort(right),
    ]);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

// Merge function to combine two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one into the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are any remaining elements in left or right, add them to the result
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
