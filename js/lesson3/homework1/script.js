const n = +prompt("введіть число");
let factorial = 1;

for (i = 1; i <= n; i++) {
  factorial = factorial * i;
}
document.write(`<p> ${factorial}</p>`);
