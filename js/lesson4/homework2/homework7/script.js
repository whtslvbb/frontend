let a = -166;
while (a < 100) {
  if ((a < 100 && a >= 10) || (a <= 10 && a > -100)) {
    document.write(`${a} `);
  }
  a = 2 * a + 200;
}
