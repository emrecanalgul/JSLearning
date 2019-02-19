const todoInput=document.getElementById("todo");
let element;

element=todoInput;
element=todoInput.classList;

todoInput.classList.add("newClass");
todoInput.classList.add("newElement2");
todoInput.classList.remove("form-control");

element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Yeni Todo Giriniz");
todoInput.setAttribute("title","Input"); //Yeni Attribute Ekleme
todoInput.removeAttribute("name");

element=todoInput;

console.log(element);