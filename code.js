async function parallelMergesort(array) {
    // Base case for 1 or 0 elements present in the array
    if (array.length <= 1) {
        return array;
    } else {
        // Call the iterative merge sort
        return await mergeSortIterative(array);
    }
}

// Async function for merge sort
async function mergeSortIterative(array) {
    const length = array.length;
    for (let i = 1; i < length; i *= 2) {
        let promises = [];  // Hold promises for each parallel merge operation.

        // The inner loop handles merging pairs of subarrays of size 'i' in parallel.
        for (let LE = 0; LE < length - 1; LE += 2 * i) {
            let Mid = Math.min(LE + i - 1, length - 1);
            let RE = Math.min(LE + (2 * i - 1), length - 1);

            // Create a promise for merging the subarrays in parallel
            promises.push(async () => {
                await merge(array, LE, Mid, RE);  // Call the async merge function
            });
        }

        // Use Promise.all to wait for all the promises to resolve using await
        await Promise.all(promises);
    }
    return array;  // Return the sorted array after all iterations.
}

// Async merge function to merge two sorted subarrays
async function merge(array, LE, Mid, RE) {
    let LS = LE;  
    let RS = Mid + 1;
    // This array will hold the merged result
    let merged = [];

    // Merge the two sorted subarrays into a single sorted array.
    while (LS <= Mid && RS <= RE) {
        if (array[LS] <= array[RS]) {
            merged.push(array[LS++]);
        } else {
            merged.push(array[RS++]);
        }
    }

    // If there are remaining elements in the left subarray
    while (LS <= Mid) {
        merged.push(array[LS++]);
    }

    // If there are remaining elements in the right subarray
    while (RS <= RE) {
        merged.push(array[RS++]);
    }

    // After merging, place the sorted subarray back into the main array.
    for (let k = LE; k <= RE; k++) {
        array[k] = merged[k - LE];
    }
}
