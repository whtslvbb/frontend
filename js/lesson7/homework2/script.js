const myMath = {
  a: 5,
  b: 2,
  sum() {
    console.log(this.a + this.b);
  },
  multiplication() {
    console.log(this.a * this.b);
  },
  division() {
    console.log(this.a / this.b);
  },
  subtraction() {
    console.log(this.a - this.b);
  },
};
myMath.division();
myMath.multiplication();
myMath.subtraction();
myMath.sum();
