//Maps - KeyValue

let myMap = new Map();

const key1 = "Emre";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;

//Set
myMap.set(key1, "String Deger");
myMap.set(key2, "Object");
myMap.set(key3, "Function");

//Get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

const cities = new Map();
cities.set("Ankara", 5);
cities.set("Bursa", 10);
cities.set("İzmit", 50);

//ForEach
cities.forEach((value, key) => {
    console.log(key, value);
})

//For Of
for (let [key, value] of cities) {
    console.log(key, value);
}

//Arraylerden Map Oluşturma
const array = [["key1", "value1"], ["key2", "value2"]];
const lastMap = new Map(array);
console.log(lastMap);

//Maplerden array oluşturma
const newCities = new Map();
newCities.set("Ankara", 5);
newCities.set("Bursa", 10);
newCities.set("İzmit", 50);
const a = Array.from(newCities);
console.log(a);