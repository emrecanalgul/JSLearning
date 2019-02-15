let element;


//Elemetleri Id'e Göre Seçme
element=document.getElementById("todo-form");

//Elemenetleri Class'a Göre Seçme
element=document.getElementsByClassName("list-group-item");

//Elementleri Tag'e Göre Seçme
element=document.getElementsByTagName("div");


//Query Selector - Tek Bir Element Döndürür.
// # => Id
// . => Class
// li=> Tag
element=document.querySelector("#todo-form");
element=document.querySelector(".list-group-item");
element=document.querySelector("div");

//Query Selector All - Çoklu Element Döndürme
element=document.querySelectorAll(".list-group-item"); //Node List Döner

console.log(element);