const githupForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new GitHub();
const ui = new UI();

eventListeners();

function eventListeners() {
    githupForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearchData);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let userName = nameInput.value.trim();

    if (userName === "") {
        alert("Geçerli bir kullanıcı adı giriniz.")
    } else {
        github.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı Bulunamadı!");
                } else {

                    ui.addSearchedUserToUI(userName);
                    Storage.addSearchedUserToStorage(userName);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearchData() {

    if (confirm("Emin misiniz?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedUsersFromUI();
    }
}

function getAllSearched() {
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(element => {
        result += `<li class="list-group-item">${element}</li>`;
    });

    lastUsers.innerHTML = result;
}