class MyString{
    reverse(string){
        const stringSplit = string.split('')
        const stringReverse = stringSplit.reverse()
        return stringReverse.join('')
    }
    ucFirst(string){
        const firstLetter = string[0].toUpperCase()
        const sideWord = string.slice(1)
        return firstLetter + sideWord
    }
    ucWords(string){
        const stringSplit = string.split(' ')
        const result = stringSplit.map(this.ucFirst)
        return result.join(' ')
    }
}

const str = new MyString();

console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

