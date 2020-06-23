/***
 * Write a guessing game where the user has to guess a secret number. After
 * every guess the program tells the user whether their number was too large
 * or too small. At the end, the number of tries needed should be printed.
 * Inputting the same number multiple times should only count as one try. If
 * the user provides an answer which isn't a number, print an error message
 * and do not count this as a try.
 */

// Simple sync prompt package
const prompt = require("prompt-sync")();

let notAMatch = true;
let tries = 0;
const answers = [];

let randomNum = Math.floor(Math.random() * 100 + 1);

while (notAMatch) {
  let answer = prompt("Guess a number between 1 and 100: > ");
  if (!answers.includes(answer)) tries++;

  if (answer === "quit") {
    process.exit(1);
  } else if (!answer) {
    console.log("Type something valid");
  } else if (parseInt(answer) === randomNum) {
    notAMatch = false;
  } else if (answer > randomNum) {
    console.log(`Too high! Tries: ${tries}`);
  } else if (answer < randomNum) {
    console.log(`Too low! Tries: ${tries}`);
  } else {
  }
}
console.log(`Congrats! You guessed it right, using ${tries} tries`);
