let cash = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;
const beerPrice = 30;
const winePrice = 70;
const pepsiPrice = 50;

export const isEnoughQuantity = (type, quantity) =>
  getQuantity(type) >= quantity;

export const getQuantity = (type) => {
  switch (type) {
    case "Пиво":
      return getBeer();
    case "Вино":
      return getWine();
    case "Пепсі":
      return getPepsi();
    default:
      return;
  }
};

export const getPrice = (type) => {
  switch (type) {
    case "Пиво":
      return getBeerPrice();
    case "Вино":
      return getWinePrice();
    case "Пепсі":
      return getPepsiPrice();
    default:
      return;
  }
};

export const setQuantityByType = (type, quantity) => {
  switch (type) {
    case "Пиво":
      return setBeer(quantity);
    case "Вино":
      return setWine(quantity);
    case "Пепсі":
      return setPepsi(quantity);
    default:
      return;
  }
};

export const getCash = () => {
  return cash;
};

export const getBeer = () => {
  return beer;
};

export const getWine = () => {
  return wine;
};

export const getPepsi = () => {
  return pepsi;
};

export const getBeerPrice = () => {
  return beerPrice;
};

export const getWinePrice = () => {
  return winePrice;
};

export const getPepsiPrice = () => {
  return pepsiPrice;
};

export const setCash = (value) => {
  return (cash += value);
};

export const setBeer = (value) => {
  return (beer -= value);
};

export const setWine = (value) => {
  return (wine -= value);
};

export const setPepsi = (value) => {
  return (pepsi -= value);
};
