// Kata 13 - JS Object From URL Encoded String (~40 min)
// Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

const urlDecode = function(text) {
  text = Array.from(text);
  let parsedObj = {};
  
  for (let c = 0; c < text.length; c++) {
    if (text[c] === "%") {
      text.splice(c, 3, ' ');
    }
  }
  text = text.join('');
  text = text.split('&');
  
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes('=')) {
      text[i] = text[i].split('=');
      parsedObj[text[i][0]] = text[i][1];
    }
  }
  return parsedObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// Expected Output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"