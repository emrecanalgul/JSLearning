class Storage {

    static getSearchedUsersFromStorage() {
        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchedUserToStorage(userName) {
        let users = this.getSearchedUsersFromStorage();

        if (users.indexOf(userName) === -1) {
            users.push(userName);
            localStorage.setItem("searched", JSON.stringify(users));

        }
    }

    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem("searched");
    }
}