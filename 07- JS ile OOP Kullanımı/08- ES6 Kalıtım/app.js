class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Bilgiler Gösteriliyor");
    }
}

class Employee extends Person {

    constructor(name, age, salary) {
        super();// Base Sınıf
        // super.showInfos()
        this.salary = salary;
    }

    showInfos() {
        console.log("Employee Bİlgileri Gösteriliyor");
    }

    toString() {
        console.log("Yazdırılıyor");
    }

    addSalary(amount) {
        this.addSalary = amount + this.salary;
        return this.addSalary;
    }
}

const emp = new Employee("Emre", 15, 5000);
let newSalary = emp.addSalary(5000);
console.log(newSalary);