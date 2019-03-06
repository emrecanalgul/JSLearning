function Person(){

}

Person.prototype.test1=function(){
    console.log("test1");
}

Person.prototype.test2=function(){
    console.log("test2");
}
function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.myTest=function(){
    console.log("MyTest");
}
const emp=new Employee("Emre",25);
emp.myTest();