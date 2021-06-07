/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  let result = "";

  for (let char of str) {
    if (char === "<") {
      result += "&lt;"
    } else if (char === "&") {
      result += "&amp;"
    } else if (char === ">") {
      result += "&gt;"
    } else if (char === "\"") {
      result += "&quot;"
    } else if (char === "'") {
      result += "&apos;"
    } else {
      result += char
    }
  }
  return result;
}


convertHTML("Dolce & Gabbana");
// should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos");
// should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve");
// should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"');
// should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List");
// should return the string Schindler&apos;s List.

convertHTML("<>");
// should return the string &lt;&gt;.

convertHTML("abc");
// should return the string abc.