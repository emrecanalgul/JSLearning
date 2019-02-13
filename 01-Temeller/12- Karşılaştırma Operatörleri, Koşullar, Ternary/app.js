//Karşılaştırma Operatörleri

//==  İki değerin eşitliğini kontrol eder.
console.log(2 == 2); //true
console.log("js" == "JAVA"); //false
console.log(2 == "2"); //true

//=== İki değerin eşitiliğini tiplerinide hesaba katarak kontrol eder
console.log(2 === "2"); //false
console.log(2 === 2); //true

// != İki değerin eşit olmamasını kontrol eder.
// >  Büyüktür
// <  Küçüktür
// >= Büyük Eşittir
// <= Küçük Eşittir

//Mantıksal Bağlaçlar
//Birden fazla koşulu kontrol etmek için kullanılan bağlaçlardır.

//NOT Operatörü !
//Bir değeri true ise false, false ise true yapar.
console.log(2 == 2); //True
console.log(!(2 == 2)); //False

//AND OPERATORU &&
//Tüm koşulların sonucu TRUE olursa sonucu true dönüyor.
console.log((2 == 2) && ("Ahmet" == "Ahmet")); //True
console.log((2 == 2) && ("Ahmet" == "Ahmet") && (3 == 1)); //false

//OR OPERATORU ||
//Or operatörü ile bağlanan koşulların en az bir tanesi true ise sonuç true olur. False gelmesi için tüm koşulların false olması lazımdır.
console.log((2 == 2) || (3 == 1)); //True

//İF KOŞULLARI
//Koşul true ise if blogu içerindeki kodlar çalıştırılır. False ise Else blogundaki kodlar çalıştırılı

const error = true;
if (error == true) {
    console.log("HATA OLUŞTU.");
} else {
    console.log("BAŞARILI.");
}

//Birden fazla koşulu kontrol etmek için else if kullanılır.
const process = 1;
if (process === 1) {
    console.log("1. Proccess Çalıştı");
} else if (process == 2) {
    console.log("2. Proccess Çalıştı");

} else if (process == 3) {
    console.log("3. Proccess Çalıştı");
} else {
    console.log("Geçersiz İşlem");
}

//Ternary Operator: Koşul ? Doğru ise:Yanlış ise
const number = 100;
console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");

//Switch Case Yapıları

switch (process) {
    case 1:
        console.log("1. Process Çalıştı.");
        break;
    case 2:
        console.log("2. Process Çalıştı.");
        break;
    case 3:
        console.log("3. Process Çalıştı.");
        break;
    default:
        console.log("Geçersiz İşlem");
}