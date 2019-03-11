function getTextData() {
    fetch("example.txt").then(response => response.text())
        .then(data => { console.log(data) })
        .catch(err => console.error(err));
}

function getLocalJsonData() {
    fetch("example.json").then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

function getJsonAPIData() {
    fetch("https://api.exchangeratesapi.io/latest").then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

getTextData();
getLocalJsonData();
getJsonAPIData();