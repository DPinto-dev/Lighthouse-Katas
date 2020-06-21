// Lighthouse Labs Kata #7 - Case Maker
//Kata 7 - Case Maker (~10 min)
// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  //Finds the empty space and uppercases the letter immediately after it
  let text = [...input];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text[i + 1] = text[i + 1].toUpperCase();
      text.splice(i, 1);
    }
  }
  return text.join("");
};

/***
 * Implemented during review
 ***/

function camelCaseAlt(string) {
  const substrings = string.split(" ");
  let result = [];
  for (let i = 0; i < substrings.length; i++) {
    if (i === 0) {
      result.push(substrings[i]);
    } else {
      let camelCased = substrings[i].split("");
      camelCased[0] = camelCased[0].toUpperCase();
      result.push(camelCased.join(""));
    }
  }
  return result.join("");
}

console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious
