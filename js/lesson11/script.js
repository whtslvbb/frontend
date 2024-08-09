const getElement = elem => document.querySelector(elem)
const getElements = elem => document.querySelectorAll(elem)

const body = document.body;
const bgCol = prompt("фон для сторінки");

body.style.backgroundColor = `${bgCol}`;

const pageFont = prompt("тип шрифта на сторінці");

body.style.fontStyle = `${pageFont}`;

const header = getElement("h1");
const pos = prompt("вирівнювання для заголовка h1");

header.style.textAlign = `${pos}`;

const linksBox = getElement("p");
const linksBg = prompt("фон для параграфа зі зсилками");

linksBox.style.backgroundColor = `${linksBg}`;

const linksColor = prompt(
  "колір тексту у параграфі зі зсилками і для самих зсилок."
);

linksBox.style.color = `${linksColor}`;

const links = getElements("p>a");

for (const element of links) {
  element.style.color = `${linksColor}`;
}

const main = getElement("div");
const mainColor = prompt("колір тексту у елементі div");

main.style.color = `${mainColor}`;

const mainWeight = prompt("товщину тексту у елементі div");

main.style.fontWeight = `${mainWeight}`;

const mainSize = prompt("розмір тексту у елементі div");

main.style.fontSize = `${mainSize}`;

const list = getElement("ul");
const mark = prompt("тип маркера для маркованого списку на сторінці");

list.type = `${mark}`;

const linkArr = [];


const sites = getElements("a");

sites.forEach((value,index) => {
    linkArr[index] = prompt("введіть назву сайту");
})

linkArr.forEach((value, index) => {
  sites[index].textContent = value;
  sites[index].href += value;
  sites[index].target = "_blank";
});
