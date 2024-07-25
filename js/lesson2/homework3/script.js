const month = prompt("Введіть число від 1 до 12");

if (month >= 1 && month <= 12) {
  if (+month === 1) {
    alert("січень");
  }
  if (+month === 2) {
    alert("лютий");
  }
  if (+month === 3) {
    alert("березень");
  }
  if (+month === 4) {
    alert("квітень");
  }
  if (+month === 5) {
    alert("травень");
  }
  if (+month === 6) {
    alert("червень");
  }
  if (+month === 7) {
    alert("липень");
  }
  if (+month === 8) {
    alert("серпень");
  }
  if (+month === 9) {
    alert("вересень");
  }
  if (+month === 10) {
    alert("жовтень");
  }
  if (+month === 11) {
    alert("листопад");
  }
  if (+month === 12) {
    alert("грудень");
  }
} else if (month === "" || month == null) {
  console.log("wrong");
} else alert("число не в діапазоні з 1 до 12");
