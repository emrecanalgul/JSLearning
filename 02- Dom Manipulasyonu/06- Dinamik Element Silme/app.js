// Element Silme

const todoList=document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

//Remove Metodu
todos[1].remove();

//RemoveChild

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[0]);


