/**
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers plus 
 * the sum of all the numbers between them. 
 * The lowest number will not always come first.
 * 
 * For example, sumAll([4,1]) should return 10 because 
 * sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
  let min = arr[0];
  let max = arr[1];

  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }

  let sumInRange = 0;
  for (let i = min; i <= max; i++) {
    sumInRange += i;
  }
  return sumInRange;
}

/** 
 * Mathematical Solution Using 
 * Carl Friedrich Gauss Formula: sum = n * ((first + last)/2)
*/
// function sumAll(arr) {
//   let countNums = Math.abs(arr[0]-arr[1])+1;

//   let result = countNums * ((arr[0] + arr[1]) / 2);

//   console.log(result);
// }

sumAll([1, 4]) //should return a number.
sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.