const fib = (num) => {
  let result = [1, 1];
  for (i = 1; i <= num - 2; i++) {
    result[i + 1] = result[i] + result[i - 1];
  }
  console.log(result);
};
fib(8);

