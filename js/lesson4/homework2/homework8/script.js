let n1 = +prompt("введіть число");
let n2 = +prompt("введіть степінь");
const num1 = n1;
let i = 0;
if (n2 > 0) {
  while(i < n2 - 1){
    n1 *= num1;
    i++
  }
} else if (n2 < 0) {
  n1 = `1/${n1 ** -n2}`;
} else n1 = 1;
document.write(`${n1}`);
