//Constructor

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = () => {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("Emre", 23, 2000);
const emp2=new Employee("Can",14,200);

emp1.showInfos();
emp2.showInfos();