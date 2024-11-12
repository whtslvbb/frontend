class CoffeeMake {
  constructor(type) {
    this.type = type;
  }
  on() {
    console.log("turn on");
  }
  off() {
    console.log("turn off");
  }
  coffeeType() {
    console.log(`${this.type}`);
  }
}

class Capelna extends CoffeeMake {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
  capelna() {
    console.log(`зроблено капельною кавоваркою ${this.name}`);
  }
}

class Rigkova extends CoffeeMake {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
  rigkova() {
    console.log(`зроблено ріжковою кавоваркою ${this.name}`);
  }
}

class KavoMachine extends CoffeeMake {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
  kavoMachine() {
    console.log(`зроблено ${this.type} ${this.name}`);
  }
}

const coffee1 = new Capelna("Капельна", "c-22");
const coffee2 = new Rigkova("Ріжкова", "r-45");
const coffee3 = new KavoMachine("Кавомашинка", "km-007");

console.log(coffee1);

coffee1.on();
coffee1.off();
coffee1.capelna();
coffee1.coffeeType();

coffee2.on();
coffee2.off();
coffee2.rigkova();
coffee2.coffeeType();

coffee3.on();
coffee3.off();
coffee3.kavoMachine();
coffee3.coffeeType();
