function simpleNum(a) {
  for (let j = 2; j < a; j++) {
    if (a % j == 0) {
      return "не просте";
    } 
  }
  return 'просте'
}
const a = prompt('введіть число')
console.log(simpleNum(a));
    // if (typeof a === 'number') {
        
    // }

 

