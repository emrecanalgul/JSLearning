//Spread Operator

const langs = ["Python", "C++", "Java", "Php"];

console.log(...langs);
const langs2 = ["C#", "Mvc", ...langs];
console.log(langs2);

const addNumbers = (a, b, c) => console.log(a + b + c);
const numbers = [100, 200, 300];
addNumbers(...numbers);
console.log(numbers);