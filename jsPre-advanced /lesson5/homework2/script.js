import * as shop from "./module.js";

const getS = (selector) => document.querySelector(selector);

const bar = document.forms["buyer"];

const buyButton = getS(".buyButton");

const checkedRadio = () => {
  const arr = [...bar.drink];
  const newArr = arr.filter((value) => {
    return value.checked === true;
  });
  return newArr[0].nextElementSibling.textContent;
};

const checkBar = () => {
  const collection = document.querySelectorAll(".quantity");
  collection[0].textContent = shop.getCash();
  collection[1].textContent = shop.getBeer();
  collection[2].textContent = shop.getWine();
  collection[3].textContent = shop.getPepsi();
};

const orderList = [];

let price = 0;
let quantity = 0;

const addToList = (number, type, price) => {
  orderList.push({ drink: type, quantity: number, price: price });
  getS(".area").innerHTML += `<div>${type}: ${number}шт.</div>`;
};

const doOrder = () => {
  switch (checkedRadio()) {
    case "Пиво":
      shop.setBeer(bar.quantity.value);
      price = shop.getBeerPrice();
      quantity = shop.getBeer();
      break;
    case "Вино":
      shop.setWine(bar.quantity.value);
      price = shop.getWinePrice();
      quantity = shop.getWine();
      break;
    case "Пепсі":
      shop.setPepsi(bar.quantity.value);
      price = shop.getPepsiPrice();
      quantity = shop.getPepsi();
      break;
  }

  if (shop.bool && bar.quantity.value !== "" && bar.quantity.value > 0) {
    addToList(bar.quantity.value, checkedRadio(), price);
    checkBar();
  }

  if (!shop.bool) {
    getS(".alert").style.display = "flex";
    getS(
      ".message"
    ).textContent = `Вибачте, але на складі залишилося ${checkedRadio()} ${quantity}`;
  }
  bar.quantity.value = "";
};

const yourCheck = (orderList) => {
  let sum = 0;
  getS(".priceList").innerHTML = "";
  orderList.map((value) => {
    sum += value.price * value.quantity;
    getS(
      ".priceList"
    ).innerHTML += `<div>${value.drink}: ${value.quantity}шт.</div>`;
  });
  getS(".priceList").innerHTML += `<div>Всього ${sum} гривень</div>`;
  shop.setCash(sum);
  checkBar();
};

bar.add.addEventListener("click", doOrder);

buyButton.addEventListener("click", () => {
  if (getS(".area").innerHTML !== "") {
    yourCheck(orderList);
    getS(".area").innerHTML = "";
    orderList.splice(0, orderList.length);
  }
});

getS(".close").addEventListener("click", () => {
  getS(".alert").style.display = "none";
});
