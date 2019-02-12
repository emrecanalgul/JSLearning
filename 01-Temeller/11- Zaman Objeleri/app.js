let value;

const now = new Date(); // Şu anki zamanı almamızı sağlar.

const date1 = new Date("05-15-1995 08:15:05");
const date2 = new Date("May 19 1995");
const date3 = new Date("5/15/1995");

value = date1.getMonth(); //Ayın Indeks Numarasını Döndörürü. Ocak=0, Aralık=11
value = date1.getDate(); //Gün Tarihini Döndürür.
value = date1.getDay(); //Gün indeksini döndürür. Pazar=0,Pazartesi=1
value = date1.getHours(); //Saati Döndürür.
value = date1.getMinutes(); //Dakikayı Döndürür.
value = date1.getSeconds(); //Saniyeyi Döndürür.
value = date1.getMilliseconds(); //Milisaniyeyi Döndürür.

//Değerlerini Değiştirme
value = date2.setMonth(6);
value = date2.setDate(15);
value = date1.setFullYear(1990);
value = date1.setHours(11);


console.log(value);