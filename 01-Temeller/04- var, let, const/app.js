//VAR
var a = 20;
a = 50;
var a = 90;

//LET - Aynı isimle ikinci bir değişken tanımasına izin verilmez
let c = 50;
c = 60;

//Const - Değişken değerinin tanımlandığı anda verilir. Bir daha da değiştirilemez
const PI = 3.14;

//Reference Veri Tiplerinde Const
const array = [1, 2, 3, 4, 5];
array.push(6);
array.push(7);//Const anahtar sözcüğü referansı gösterdiğinden ekleme ve çıkarma işlemlerinde bir hata olmayacaktır.


