let value;

//Document Objesi
value=document;

//Document Objesi içirisindeki HTML elementleri
value=document.all;
value=document.all[4];

const elements=document.all; //Html Collection

//for(let i=0;i<elements.length;i++){
//    console.log(elements[i]);
//}

const collections=Array(document.all); // Arraya dönüştürme
collections.forEach(function(colletion){
    console.log(colletion)
});

value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.location.port;
value=document.URL;

//Scriptler
value=document.scripts;

//Linkler
value=document.links;
value=document.links[0].getAttribute("class");
value=document.links[0].getAttribute("href");
value=document.links[0].className;
value=document.links[0].classList; // Classları Array Olarak Getirir.

//Formlar
value=document.forms;
value=document.forms["form"]; //Name attributene göre seçme
value=document.forms["form"].id;
value=document.forms["form"].method;


console.log(value);