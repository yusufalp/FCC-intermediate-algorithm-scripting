/**
 * Fill in the object constructor with the following 
 * methods below:
 * 
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 
 * Run the tests to see the expected output for each method. 
 * The methods that take an argument must accept 
 * only one argument and it has to be a string. 
 * These methods must be the only available means of 
 * interacting with the object.
 */

function Person(firstAndLast) {
  this.getFirstName = function () {
    return firstAndLast.split(' ')[0];
  }

  this.getLastName = function () {
    return firstAndLast.split(' ')[1];
  }

  this.getFullName = function () {
    return firstAndLast;
  };

  this.setFirstName = function (firstName) {
    firstAndLast = `${firstName} ${this.getLastName()}`;
  }

  this.setLastName = function (lastName) {
    firstAndLast = `${this.getFirstName()} ${lastName}`;
  }

  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  }
};

var bob = new Person('Bob Ross');


// Test cases
// Object.keys(bob).length;
// should return 6

// bob instanceof Person 
// should return true

// bob.firstName 
// should return undefined

// bob.lastName 
// should return undefined

bob.getFirstName();
// should return the string Bob

bob.getLastName();
// should return the string Ross

bob.getFullName();
// should return the string Bob Ross

bob.getFullName();
// should return the string Haskell Ross after bob.setFirstName("Haskell")

bob.getFullName();
// should return the string Haskell Curry after bob.setLastName("Curry")

bob.getFullName();
// should return the string Haskell Curry after bob.setFullName("Haskell Curry")

bob.getFirstName();
// should return the string Haskell after bob.setFullName("Haskell Curry")

bob.getLastName();
// should return the string Curry after bob.setFullName("Haskell Curry")