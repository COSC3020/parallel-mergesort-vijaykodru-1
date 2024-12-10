const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');
const testSort = jsc.forall("array nat", async function (arr) {
    var a1 = JSON.parse(JSON.stringify(arr));
    var a2 = JSON.parse(JSON.stringify(arr));
    const result = await parallelMergesort(a1);  // Use await here to ensure it resolves
    return JSON.stringify(result) === JSON.stringify(a2.sort((a, b) => a - b));
});

jsc.assert(testSort);
/*
async function testMergeSort() {
    const result1 = await parallelMergesort([1, 0]);
    console.log('Sorted array:', result1);

    const result2 = await parallelMergesort([3, 2, 1]);
    console.log('Sorted array:', result2);
}

testMergeSort();*/