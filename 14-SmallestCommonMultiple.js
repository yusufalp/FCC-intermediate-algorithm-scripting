/**
 * Find the smallest common multiple of the provided parameters 
 * that can be evenly divided by both, as well as by 
 * all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not 
 * necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple 
 * of both 1 and 3 that is also evenly divisible by all numbers 
 * between 1 and 3. The answer here would be 6.
 */

// array destructuring to identify 
// min and the max numbers in the given arr
// let [min, max] = arr.sort((a,b)=>a-b);

function smallestCommons(arr) {
  let min = arr[0];
  let max = arr[1];

  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }

  let smallestCommonMultiple = min;

  while (min < max) {
    smallestCommonMultiple = findCommonMultiple(smallestCommonMultiple, min + 1);
    min++;
  }

  return smallestCommonMultiple;
}

function findCommonMultiple(a, b) {
  for (let i = b; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

smallestCommons([1, 5]);
//should return a number.

smallestCommons([1, 5]);
//should return 60.

smallestCommons([5, 1]);
//should return 60.

smallestCommons([2, 10]);
//should return 2520.

smallestCommons([1, 13]);
//should return 360360.

smallestCommons([23, 18]);
//should return 6056820.