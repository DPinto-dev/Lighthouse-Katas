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

  if (answer === "quit") {
    process.exit(0);
  } else if (answers.includes(answer)) {
    console.log(
      "You have given that answer before, please try again with a different number."
    );

    // If no answer is given or if it's not a number (excep. of 'quit')
  } else if (!answer || !parseInt(answer)) {
    console.log("Please, write a valid number.");

    //Winning condition
  } else if (parseInt(answer) === randomNum) {
    tries++;
    notAMatch = false;
  } else if (answer > randomNum) {
    answers.push(answer);
    tries++;
    console.log(`Too high! Tries: ${tries}`);
  } else if (answer < randomNum) {
    answers.push(answer);
    tries++;
    console.log(`Too low! Tries: ${tries}`);
  }
}
console.log(`Congrats! You guessed it right, using ${tries} tries`);
