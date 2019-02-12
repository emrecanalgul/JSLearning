let value;

//VeriTiplerini String'e Çevirme
value = String(123);
value = String(3.14);
value = String(false);
value = String(function () { }(console.log("Merhaba")));
value = String([1, 2, 3, 4]);

value = (153).toString();
value = (3.14).toString();

//Veri Tiplerini Number Çevirme
value = Number("123");
value = parseInt("123");

value = Number("3.14");
value = parseFloat("3.14");

value = Number(null); //0
value = Number(undefined) //NaN : Not a Number
value = Number("Merhaba Dünya") //NaN
value = Number([1, 2, 3, 4]); //NaN

//Otomatik Çevirme
const a = "Hello " + 34; //"Hello 34"
const b = "34" + 53; //"3453"
const c = Number("34") + 53; //84