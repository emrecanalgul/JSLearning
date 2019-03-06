class Employee{

    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    ShowInfos=()=>{
        console.log("Isım: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
    }
}

const emp=new Employee("Emre",15,800);
emp.ShowInfos();