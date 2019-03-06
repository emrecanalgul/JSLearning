function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function()
{ console.log("İsim: " + this.name + " Yaş: " + this.age); }

const emp1 = new Employee("Emre", 23);
const emp2 = new Employee("Can", 14);

emp1.showInfos();