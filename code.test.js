const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const testSort = jsc.forall("array nat", async function (arr) {
    const a1 = JSON.parse(JSON.stringify(arr));
    const a2 = JSON.parse(JSON.stringify(arr));
    const sortedParallel = await parallelMergesort(a1); 
    const sortedNative = a2.sort((a, b) => a - b); 
    return JSON.stringify(sortedParallel) === JSON.stringify(sortedNative);
});

jsc.assert(testSort);