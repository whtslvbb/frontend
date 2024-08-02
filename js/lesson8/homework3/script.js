const str = prompt("enter the sentence").toLowerCase();

str.split('html')
const arrStr = str.split('html');
console.log(arrStr.length -1);

let count = 0;
let start = 0;

while (true) {
  const position = str.indexOf("html", start);

  if (position === -1) {
    break;
  }

  count += 1;
  start = position + 1;
}

console.log(count);

// html adsdad html html Html fsfs
