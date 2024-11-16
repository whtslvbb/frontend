let cash = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;
export let bool = true;

export const getCash = () => {
  return `${cash} грн`;
};
export const getBeer = () => {
  return `${beer} шт.`;
};
export const getWine = () => {
  return `${wine} шт.`;
};
export const getPepsi = () => {
  return `${pepsi} шт.`;
};

export const getBeerPrice = () => {
  return 30;
};
export const getWinePrice = () => {
  return 70;
};
export const getPepsiPrice = () => {
  return 50;
};

export const setCash = (value) => {
  cash += value;
  return;
};

export const setBeer = (value) => {
  if (beer >= value) {
    bool = true;
    beer = beer - value;
    return;
  }

  bool = false;
  return;
};

export const setWine = (value) => {
  if (wine >= value) {
    bool = true;
    wine -= value;
    return;
  }
  bool = false;
  return;
};

export const setPepsi = (value) => {
  if (pepsi >= value) {
    bool = true;
    pepsi -= value;
    return;
  }
  bool = false;
  return;
};
