const str = prompt('Enter url')
const position = str.indexOf('://')
const newStr = str.slice(position + 3)

console.log(newStr);



// https://www.google.com
// http://www.w3schools.com