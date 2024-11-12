class Worker{
    constructor(name, surname, rate, days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(){
        return this.rate * this.days
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31