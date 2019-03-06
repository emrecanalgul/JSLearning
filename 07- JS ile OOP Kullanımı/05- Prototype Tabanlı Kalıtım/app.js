function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("Isım: " + this.name + " Yaş: " + this.age);
}

function Employee(name, age, salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age); 
    this.salary = salary;
}

//Persondaki metotların kalıtım yoluyla Employe Aktarılması
Employee.prototype=Object.create(Person.prototype);

const emp=new Employee("Emre",25,4000);
//Overriding İşlemi - Base Sınıftan miras yoluyla alınan metotları bu sınıf için özel yazılmış metod kullanılır
Employee.prototype.toString=function(){
    console.log("Employee");
}
Employee.prototype.showInfos=function(){
    console.log("Isım: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
}
emp.showInfos();
emp.toString();