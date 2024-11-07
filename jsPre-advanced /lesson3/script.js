function CoffeeMake(type) {
  this.type = type;
}

CoffeeMake.prototype.on = () => {
  console.log("turn on");
};

CoffeeMake.prototype.off = () => {
  console.log("turn off");
};

CoffeeMake.prototype.coffeeType = function () {
  console.log(`${this.type}`);
};

function Capelna(type, name) {
  CoffeeMake.call(this, type);
  this.name = name;
}

Capelna.prototype = Object.create(CoffeeMake.prototype);
Capelna.prototype.constructor = Capelna;

Capelna.prototype.capelna = function () {
  console.log(`зроблено капельною кавоваркою ${this.name}`);
};

function Rigkova(type, name) {
  CoffeeMake.call(this, type);
  this.name = name;
}

Rigkova.prototype = Object.create(CoffeeMake.prototype);
Rigkova.prototype.constructor = Rigkova;

Rigkova.prototype.rigkova = function () {
  console.log(`зроблено ріжковою кавоваркою ${this.name}`);
};

function KavoMachine(type, name) {
  CoffeeMake.call(this, type);
  this.name = name;
}

KavoMachine.prototype = Object.create(CoffeeMake.prototype);
KavoMachine.prototype.constructor = KavoMachine;

KavoMachine.prototype.kavoMachine = function () {
  console.log(`зроблено ${this.type} ${this.name}`);
};

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
