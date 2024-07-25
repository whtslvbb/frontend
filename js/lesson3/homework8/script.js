let n1 = +prompt("введіть число");
let n2 = +prompt("введіть степінь");
const num1 = n1;
if (n2 > 0) {
  for (i = 0; i < n2 - 1; i++) {
    n1 *= num1;
  }
} else if (n2 < 0) {
  n1 = `1/${n1 ** -n2}`;
} else n1 = 1;
document.write(`${n1}`);
