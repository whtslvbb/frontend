const n = +prompt("введіть число");
let factorial = 1;
let i=1;

while (i <= n) {
  factorial = factorial * i;
  i++
}
document.write(`<p> ${factorial}</p>`);
