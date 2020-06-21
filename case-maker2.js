
//Kata 12 - Case Maker II
// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:
// My solution is incomplete as it does not address the Precedence requirement. I will later implement weights to the cases and then sort the casing [] accordingly, before calling the functions
/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
  1. camel, pascal, snake, kebab, title
  2. vowel, consonant
  3. upper, lower
*/

const makeCase = function(input, casing) {
  input = [...input.trim()]; //spread input string into an array
  
  // To comply with the precedence requirement:
  const precedence = {  
    camel: 1,
    pascal: 1,
    snake:1,
    kebab: 1,
    title: 1,
    vowel: 2,
    consonant: 2,
    upper: 3,
    lower: 3
  }

  let cases = {
    camel: function(text){
      for(let i = 0; i < text.length; i++){
        if (text[i] === ' '){
          text[i + 1] = text[i + 1].toUpperCase();
          text.splice(i, 1);
        }
      }
      return text.join('');
      },
    pascal: function(text){
      text[0] = text[0].toUpperCase();
      cases.camel(text);
      return text.join('');
    },
    snake: function(text){
      for(let i = 0; i < text.length; i++){
        if (text[i] === ' '){
          text.splice(i, 1, '_');
        }
      }
      return text.join('');
    },
    kebab: function(text){
      for(let i = 0; i < text.length; i++){
        if (text[i] === ' '){
          text.splice(i, 1, '-');
        }
      }
      return text.join('');
    },
    title: function(text){
      text[0] = text[0].toUpperCase();
      for(let i = 0; i < text.length; i++){
        if (text[i] === ' ') text[i + 1] = text[i + 1].toUpperCase();
      }
      return text.join('');
    },
    vowel: function(text){
      let vowels = 'aeiouAEIOU';
      for(let i = 0; i < text.length; i++){
        if (vowels.includes(text[i])) {
          text[i] = text[i].toUpperCase();
        }
      }
      return text.join('');
    },
    consonant: function(text){
      let consonants = 'abcdfghjklmnopqrstvwxyz';
      for(let i = 0; i < text.length; i++){
        if (consonants.includes(text[i].toLowerCase())) {
          text[i] = text[i].toUpperCase();
        }
      }
      return text.join('');
    },
    upper: function(text){
      text = text.join('');
      return text.toUpperCase();
    },
    lower: function(text){
      text = text.join('');
      return text.toLowerCase();
    }
  }


  // Output:
  if (typeof casing === "object"){ //If there's more than one casing
  let tempArr = input.slice(); //Copies input (Array.from(input))

    // Sorts according to precedence requirement
    casing.sort((a, b) => precedence[a] - precedence[b])

    for (let c of casing){
      tempArr = (cases[c]([...tempArr])); //Had to make sure the argument was always an array. Functions will return string
    }
    return tempArr;
  }
  return(cases[casing](input)) //For single casing
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
console.log(makeCase("this is a string", ["lower","vowel"]));

