

document.getElementById("btn").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "example.txt", true);
    xhr.send();

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("innerText").textContent = this.responseText;
        }
    }

});