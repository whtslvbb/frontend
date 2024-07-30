function max(a, b, ...arg) {
    let maxNum = a
  for (let i = 0; i < arguments.length; i++){
    if(maxNum < arguments[i]){
        maxNum = arguments[i]
    }
  }
     return maxNum;
}

console.log(max(1, 20, 3, 4,1,2,3,4,-77,8,5,7,58,5,5,5,75,7,57,5,7,6,57,5,7,5,75,7,5,7,44)); 
