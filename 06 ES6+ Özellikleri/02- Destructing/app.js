//Destructing
arr = [100, 200, 300];
[number1, number2] = arr;

console.log(number1, number2);


//Obje Destructing
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60
}

const { a: numberA, c: numberC, e: numberE } = numbers;
console.log(numberA, numberC, numberE);

//Function Destructing
const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

//Obje Destructing
const person = {
    name: "Emre Can",
    year: 1995,
    salary: 1000,
    showInfo: () => console.log("İşlem Yapılıyor")
}
const { name: isim, year: yil, salary: maas, showInfo: bilgileriGöster } = person;
console.log(isim, yil, maas);
bilgileriGöster();
