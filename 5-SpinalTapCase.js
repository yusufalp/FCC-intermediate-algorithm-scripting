/**
 * Convert a string to spinal case. Spinal case is 
 * all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && /[A-Z]+/.test(str[i])) {
      result += str[i].toLowerCase();
    } else if (/[-_\s]+/.test(str[i - 1])) {
      result += `-${str[i].toLowerCase()}`;
    } else if (!(/[-_\s]+/.test(str[i - 1])) && /[A-Z]+/.test(str[i])) {
      result += `-${str[i].toLowerCase()}`;
    } else if (/[-_\s]+/.test(str[i])) {
      // result += "-";
    } else {
      result += str[i];
    }
  }
  console.log(result);



  //  let checkSpecial = /[*-_\s]+/.test(str)
  //  let checkUpper = /[A-Z]+/.test(str)
  //  console.log(checkSpecial, checkUpper)
}

spinalCase("This Is Spinal Tap")
//should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap")
// should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show")
// should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh")
// should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things")
// should return the string all-the-small-things.