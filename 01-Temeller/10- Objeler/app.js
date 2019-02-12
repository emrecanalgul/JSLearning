let value;
const programmer = {
    name: "Emre Can",
    age: 23,
    email: "can.emre1995@gmail.com",
    lang: ["Python", "JavaScript", "C++", "C#", "MVC"],

    adress: {
        city: "İstanbul",
        street: "Avcılar",
    },

    work: function () {
        console.log("Programcı Çalışıyor.");
    }
}

value = programmer;

value = programmer.email;
value = programmer["email"];
value = programmer.adress.city;

const programmers = [
    { name: "Emre Can", age: 23 },
    { name: "Emre Can", age: 23 },
    { name: "Emre Can", age: 23 },
    { name: "Emre Can", age: 23 },
    { name: "Emre Can", age: 23 },
]
value = programmers[0].name;

console.log(value);

