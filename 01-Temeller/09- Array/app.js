let value;

const numbers = [45, 25, 14, 3, 78, 99];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 85);

const langs = ["Python", "Java", "C++", "JavaScript"];

const a = ["Merhaba", 22, null, undefined, 3.14]; // Bir dizi farklı veri tiplerine sahip elemanlar alabilir


value = numbers[0] //45;

value = numbers.length; //Dizinn Uzunluğunu Getirir.

//Herhangi bir indeksin değerini değiştirme
numbers[2] = 999999;

//IndexOf
value = numbers.indexOf(999999);

//Arrayin Sonuna Değer Ekleme
numbers.push(300);

//Arrayin başına Değer Ekleme
numbers.unshift(150);

//Arraydeyin sonundan eleman silme
numbers.pop();

//Arratin basından eleman silme
numbers.shift();

//Belirli bir indeksten belirli bir indekse kadar arasındaki elemanları siler
numbers.splice(0, 2);

//Arrayin değerlerini tersine çevirme.
numbers.reverse();// [45, 25, 14, 3, 78, 99]= [99,78,3,14,25,45]

//Sıralama
value = numbers.sort(); //Sadece ilk Rakama bakarak sıralar. 

value = numbers.sort(function (x, y) { return x - y; }); //Küçükten Büyüğü Sıralama Yapar
value = numbers.sort(function (x, y) { return y - x; }); //Büyükten Küçüğe Sıralama Yapar
console.log(value);