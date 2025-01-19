import * as shop from "./module.js";

const getS = (selector) => document.querySelector(selector);

const bar = document.forms["buyer"];

const buyButton = getS(".buyButton");

const checkedRadio = () => {
  const arr = [...bar.drink];
  const element = arr.find((value) => value.checked);
  return element.value;
};

const checkBar = () => {
  const collection = document.querySelectorAll(".quantity");
  collection[0].textContent = shop.getCash();
  collection[1].textContent = shop.getBeer();
  collection[2].textContent = shop.getWine();
  collection[3].textContent = shop.getPepsi();
};

const orderList = [];

const addToList = (number, type, price) => {
  orderList.push({ drink: type, quantity: number, price });
  createList(".area");
};

const createList = (listClass) => {
  getS(listClass).innerHTML = orderList
    .map(({ drink, quantity }) => `<div>${drink}: ${quantity}шт.</div>`)
    .join("");
};

const doOrder = () => {
  if (bar.quantity.value === "" || bar.quantity.value <= 0) {
    return;
  }

  const type = checkedRadio();
  const quantity = bar.quantity.value;
  const price = shop.getPrice(type);
  const quantityInShop = shop.getQuantity(type);

  if (!shop.isEnoughQuantity(type, quantity)) {
    getS(".alert").style.display = "flex";
    getS(
      ".message"
    ).textContent = `Вибачте, але на складі залишилося ${type} ${quantityInShop}`;
    return;
  }

  shop.setQuantityByType(type, quantity);

  addToList(bar.quantity.value, type, price);
  checkBar();

  bar.quantity.value = "";
};

const yourCheck = (orderList) => {
  const sum = orderList.reduce(
    (acc, value) => (acc += value.price * value.quantity),
    0
  );

  createList(".priceList");

  getS(".priceList").innerHTML += `<div>Всього ${sum} гривень</div>`;

  shop.setCash(sum);

  checkBar();
};

bar.add.addEventListener("click", doOrder);

buyButton.addEventListener("click", () => {
  if (orderList.length) {
    yourCheck(orderList);
    orderList.splice(0, orderList.length);
    createList(".area");
  }
});

getS(".close").addEventListener("click", () => {
  getS(".alert").style.display = "none";
});
