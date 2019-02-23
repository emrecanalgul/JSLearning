//KeyPress -> Klavyedeki Sayı ve Harfleri Basılınca Aktifleşir

// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.key);
// }

//KeyDown -> Klaydeki herhangi bir tuşa basıldığında çalışır

// document.addEventListener("keydown",run);

// function run(e){
//         console.log(e.key);
// }

//KeyUp -> Klaydeki tuşa basmayı bıraktıktan sonra çalışır.

// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key);
// }

//Ör: Inputa Girilen Değeri Başka Bir Alana Yazdırma.

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent=e.target.value;
}