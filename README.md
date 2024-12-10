# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The implemented code recursively divides the given array into two subarrays, which takes $O(logn)$ time due to the recursive calls. After the division, the two subarrays are sorted concurrently, and then they are merged. The merging process takes $O(n)$ time at each level.

Thus, the total work of the algorithm, which considers both the parallel sorting and serial merging at each level, is $O(nlogn)$.

The span refers to the longest chain of dependent operations. The merging process is serial, taking $O(n)$ at each level, while the recursive sorting take $O(logn)$.

Thus, the total time complexity is $O(nlogn)$, and the span is also $\Theta(nlogn)$


References:

Update: I had to change my implementation of mergesort to be recursive rather than itertive. This is because iterative mergesort I implemented is failing to merge the elements properly resulting the tests to fail.

I used my iterative mergesort i did in my other exercise 

https://www.geeksforgeeks.org/javascript-promise/

The above website helped me using the promises for parallel proceesing the mergesort. Rest of the mergesort is similar to the iterative one I implemented in my previous mergesort exercise.

https://www.geeksforgeeks.org/async-await-function-in-javascript/

The above website helped with creating async function

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice