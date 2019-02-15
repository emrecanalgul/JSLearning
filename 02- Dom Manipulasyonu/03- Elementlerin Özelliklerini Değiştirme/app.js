const element=document.querySelector("#clear-todos");


//Element Özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element Özellerini Değiştirme

// element.className="btn btn-primary";
// element.style.color="#000";
// element.style.marginLeft="50px";
// element.href="https://www.google.com.tr";
// element.target="_blank";
// element.textContent="Silin";
// element.innerHTML="<span style='color:green'>Silin</span>";

// const liElements=document.querySelectorAll(".list-group-item");
// liElements.forEach(function(el){
//     el.style.color="red";
//     el.style.background="#eee";
// });

//Elemenlerin çocuklarını seçme

let element2=document.querySelector("li:first-child"); //İlk çocuğu seçer
element2=document.querySelector("li:last-child"); // Son çocuğu seçer
element2=document.querySelector("li:nth-child(3)"); 
element2=document.querySelectorAll("li:nth-child(odd)"); //Tek sayıdaki çocukları seçer. 1-3-5-7
element2=document.querySelectorAll("li:nth-child(even)"); //Çift sayıdaki çocukları seçer. 2-4-6-8

element2.forEach(function(el){
    el.style.background="#ccc";
    el.style.color="red";
});

console.log(element2);

