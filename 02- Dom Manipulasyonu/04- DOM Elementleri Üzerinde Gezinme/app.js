let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


//Child Nodes - Text Dahil
value = todoList.childNodes;

//Child Nodes - Sadece Elemenler
value = todoList.children;
value = todoList.children.children;
value = todoList.children[2].textContent = "Değiştrildi."

value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.childElementCount;

//Ebeveyn Gezinme
value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

//Elemenet Kardeşlerinde Gezinme

value=todo.previousElementSibling;
value=todo.nextElementSibling;


console.log(value);