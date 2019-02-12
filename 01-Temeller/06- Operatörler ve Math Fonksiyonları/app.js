let value;

const value1 = 10;
const value2 = 4;

//Aritmetik Operatörler

value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;

//Math Fonksiyonları

value = Math.PI;
value = Math.E;

value = Math.round(3.6); //Yuvarlama: 4
value = Math.round(3.5); //Yuvarlama: 4
value = Math.round(3.2); //Yuvarlama: 3

value = Math.ceil(3.1); //Yukarı Yuvarlama: 4

value = Math.floor(3.9); //Aşağı Yuvarlama: 3

value = Math.sqrt(16); //Karekörk: 4

value = Math.abs(-10); //Mutlak Deger: 10

value = Math.pow(8, 3); //Üst Alma: 8'in 3'üncü kuvveti: 512

value = Math.max([1, 2, 3, 4, 12, 4]); //En Büyük Sonucu Döner: 12
value = Math.min([1, 2, 3, 4, 12, 4]); //En Küçük Sonucu Döner: 1

value = Math.random(); //0 ile 1 arasında (1 dahil değil) rastgele ondalıklı sayılar üretir.
value = Math.random() * 20 //0 ile 20 arasında (20 dahil değil) rastgele ondalıklı sayılar üretir.
value = Math.random() * 20 + 1 //1 ile 21 arasında (21 dahil değil) rastgele ondalıklı sayılar üretir.
value = Math.round(Math.random() * 20 + 1) //1 ile 21 arasında (21 dahil değil) rastgele tam sayılar üretir.

