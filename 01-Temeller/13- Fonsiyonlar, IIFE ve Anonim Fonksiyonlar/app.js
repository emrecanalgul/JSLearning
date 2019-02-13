//Fonksiyon Tanımlama
function Hello() {
    console.log("Merhaba Dünya");
}
Hello(); //Fonksiyon Çagrısı


//Fonksiyonlara Parametre Gönderimi
function HelloName(name = "Bilgi Girilmemiş", age = "Bilgi Girilmemiş") {

    //if(typeof name=="undefined") name="Bilgi Girilmemiş.";
    //if(typeof age=="undefined") name="Bilgi Girilmemiş.";

    console.log(`İsim:${name}\nYaş:${age}`);
}

HelloName();
HelloName("Emre", 23);
HelloName("Can", 21);

//Fonksiyonlarda Return
function square(x) {
    return x * x;
}
function cube(x) {
    return x * x * x;
}

let n = square(15);
console.log("Karesi:" + n);
console.log("Kübü:" + cube(n));

//Function Exression
const merhaba = function (name) {
     console.log("Merhaba " + name) 
    };
merhaba("Emre");

//IIFE Tanımlandığı yerde çalışan fonksiyon türü
(function(name){
    console.log("Merhaba "+name)
})("Emrecan");

//Nesne Fonksiyonları

const db={
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi.");
    },
    update:function(id){
        console.log(`ID: ${id} Güncellendi.`);
    },
    delete: function(id){
        console.log(`ID: ${id} Silindi`);
    }
}

console.log(db.host);
db.add();
db.get();
db.update(1);
db.delete(10);