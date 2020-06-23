//Kata 12 - Case Maker II
// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:
// My solution is incomplete as it does not address the Precedence requirement. I will later implement weights to the cases and then sort the casing [] accordingly, before calling the functions
/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
  1. camel, pascal, snake, kebab, title
  2. vowel, consonant
  3. upper, lower
*/

const makeCase = function (input, casing) {
  // To comply with the precedence requirement:
  const precedence = {
    camel: 1,
    pascal: 1,
    snake: 1,
    kebab: 1,
    title: 1,
    vowel: 2,
    consonant: 2,
    upper: 3,
    lower: 3,
  };

  let cases = {
    camel: function (textArray) {
      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray[i + 1] = textArray[i + 1].toUpperCase();
          textArray.splice(i, 1);
        }
      }
      return textArray.join("");
    },
    pascal: function (textArray) {
      textArray[0] = textArray[0].toUpperCase();
      cases.camel(textArray);
      return textArray.join("");
    },
    snake: function (textArray) {
      return cases.kebabOrSnake(textArray, "snake");
    },
    kebab: function (textArray) {
      return cases.kebabOrSnake(textArray, "kebab");
    },
    kebabOrSnake: function (textArray, casing) {
      const results = [];
      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          casing === "kebab" ? results.push("-") : results.push("_");
        }
        // If "kebab" or "snake" have been called before
        else if (textArray[i] === "-" && casing === "snake") {
          results.push("_");
        } else if (textArray[i] === "_" && casing === "kebab") {
          results.push("-");
        }
        //If a casing is called before kebab and eliminates the " "
        else if (
          i > 0 &&
          "AEIOUBCDFGHJKLMNOPQRSTVWXYZ".includes(textArray[i]) &&
          textArray[i - 1] !== "-" &&
          textArray[i - 1] !== "_"
        ) {
          casing === "kebab" ? results.push("-") : results.push("_");
          results.push(textArray[i]);
        } else {
          results.push(textArray[i]);
        }
      }
      return results.join("");
    },
    title: function (textArray) {
      textArray[0] = textArray[0].toUpperCase();
      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ")
          textArray[i + 1] = textArray[i + 1].toUpperCase();
      }
      return textArray.join("");
    },
    vowel: function (textArray) {
      let vowels = "aeiouAEIOU";
      for (let i = 0; i < textArray.length; i++) {
        if (vowels.includes(textArray[i])) {
          textArray[i] = textArray[i].toUpperCase();
        }
      }
      return textArray.join("");
    },
    consonant: function (textArray) {
      let consonants = "bcdfghjklmnopqrstvwxyz";
      for (let i = 0; i < textArray.length; i++) {
        if (consonants.includes(textArray[i].toLowerCase())) {
          textArray[i] = textArray[i].toUpperCase();
        }
      }
      return textArray.join("");
    },
    upper: function (textArray) {
      textArray = textArray.join("");
      return textArray.toUpperCase();
    },
    lower: function (textArray) {
      textArray = textArray.join("");
      return textArray.toLowerCase();
    },
  };

  //spread input string into an array
  input = [...input.trim()];

  // Output:
  //If there's more than one casing
  if (Array.isArray(casing)) {
    let tempArr = input.slice(); //Copies input (Array.from(input))

    // Sorts according to precedence requirement
    // console.log("Cases as given by user", casing);
    casing.sort((a, b) => precedence[a] - precedence[b]);
    // console.log("Cases after precedence sorting", casing);

    for (let c of casing) {
      tempArr = cases[c]([...tempArr]); //Had to make sure the argument was always an array. cases[x]() will return string
      // console.log("Casing:", c, "->", tempArr);
    }
    return `Final Output: ${tempArr}`;
  }
  //For single casing (not an array of cases)
  return `Output: ${cases[casing](input)}`;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["vowel", "lower"]));
console.log(makeCase("this is a string", ["lower", "vowel"]));
console.log(
  makeCase("this is a string", ["lower", "pascal", "kebab", "vowel"])
);
console.log(
  makeCase("this is a string", [
    "camel",
    "lower",
    "kebab",
    "pascal",
    "snake",
    "vowel",
  ])
);
