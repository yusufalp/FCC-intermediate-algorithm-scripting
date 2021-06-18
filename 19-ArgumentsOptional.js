/**
 * Create a function that sums two arguments together. 
 * If only one argument is provided, then return a function 
 * that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, 
 * and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument 
 * will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 */

function addTogether() {
  let first = arguments[0]
  let second = arguments[1]
  if (arguments.length === 2) {
    if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === "number") {
      function addSecond(second) {
        if (typeof second === "number") {
          return first + second;
        } else {
          return undefined;
        }
      }
      return addSecond;
    }
  } else {
    return undefined;
  }
}

addTogether(2, 3);
// should return 5.

addTogether(23, 30);
// should return 53.

addTogether(5)(7);
// should return 12.

addTogether("http://bit.ly/IqT6zt");
// should return undefined.

addTogether(2, "3");
// should return undefined.

addTogether(2)([3]);
// should return undefined.