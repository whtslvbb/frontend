const myMath = {
  PI() {
    console.log("PI", 22 / 7);
  },

  pow(number, degree) {
    if (this.isEmpty(number)) {
      return "Будь ласка, введіть числa";
    }
    if (this.isNumber(number, degree)) {
      const a = number;
      if (degree >= 1) {
        for (let i = 1; i < degree; i++) {
          number *= a;
        }
      } else if (degree < 0) {
        number = `1/${number ** -degree}`;
      } else number = 1;
      return number;
    }
    return "Повинно бути числове значення.";
  },

  abs(number) {
    if (this.isEmpty(number)) {
      return "Будь ласка, введіть число";
    }
    if (this.isNumber(number)) {
      if (number < 0) {
        return -number;
      }
      return number;
    }
    return "Повинно бути числове значення.";
  },

  max(number1, ...arg) {
    if (this.isEmpty(number1)) {
      return "Будь ласка, введіть числa";
    }
    if (this.isNumber(number1, ...arg)) {
      let maxNum = number1;
      for (let i = 0; i < arguments.length; i++) {
        if (maxNum < arguments[i]) {
          maxNum = arguments[i];
        }
      }
      return maxNum;
    }
    return "Повинно бути числове значення.";
  },

  min(number1, ...arg) {
    if (this.isEmpty(number1)) {
      return "Будь ласка, введіть числa";
    }
    if (this.isNumber(number1, ...arg)) {
      let minNum = number1;
      for (let i = 0; i < arguments.length; i++) {
        if (minNum > arguments[i]) {
          minNum = arguments[i];
        }
      }
      return minNum;
    }

    return "Повинно бути числове значення.";
  },

  isEmpty(number) {
    if (number === undefined) {
      return true;
    } else false;
  },

  isNumber() {
    for (let i = 0; i < arguments.length; i++) {
      if (!isFinite(arguments[i])) {
        if (condition) {
        }
        return false;
      }
    }
    return true;
  },
};

myMath.PI();
console.log("pow", myMath.pow(4, -2));
console.log("abs", myMath.abs(-6));
console.log("max", myMath.max(1, 2, 4, 5, 25, 23, 24, -11111));
console.log("min", myMath.min(1, 2, 4, -5, 25, 3, 24, 11));
