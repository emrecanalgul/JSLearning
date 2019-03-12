const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodoFromLocalStorage);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", deleteAllTodos);
}

function deleteAllTodos() {

    if (confirm("Tüm Todoları Temizlemek İstediğinizden Emin Misiniz?")) {

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display : none !important")
        } else {
            listItem.setAttribute("style", "display : block")
        }
    });
}


function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromLocalStoreage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Başarılı bir şekilde silindi.");
    }
}

function deleteTodoFromLocalStoreage(deleteTodo) {
    let todos = getTodosFromLocalStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodoFromLocalStorage() {
    todos = getTodosFromLocalStorage();

    todos.forEach(todo => {
        addTodoInputUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {

        showAlert("danger", "Bir TODO giriniz.");

    } else {
        let todos = getTodosFromLocalStorage();
        let sameTodoControl = false;

        todos.forEach(function (todo) {
            if (todo === newTodo) {
                showAlert("danger", "Aynı isimli bir todo bulunmaktadır. Tekrar Ekleme Yapamazsınız!");
                sameTodoControl = true;
            }

        });

        if (sameTodoControl === false) {
            addTodoInputUI(newTodo);
            addTodoInputLocalStorage(newTodo);

            showAlert("success", "Eklendi.")
        }

    }

    e.preventDefault();
}

function getTodosFromLocalStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodoInputLocalStorage(newTodo) {
    let todos = getTodosFromLocalStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 2000);
}

function addTodoInputUI(newTodo) {

    //List Item Oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    //Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = '<i class = "fa fa-remove"></i>'

    //TextNode Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo Liste ListItem Ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}
