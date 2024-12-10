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


References:

I used my iterative mergesort i did in my other exercise 

https://www.geeksforgeeks.org/javascript-promise/

The above website helped me using the promises for parallel proceesing the mergesort. Rest of the mergesort is similar to the iterative one I implemented in my previous mergesort exercise.

https://www.geeksforgeeks.org/async-await-function-in-javascript/

The above website helped with creating async function

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice