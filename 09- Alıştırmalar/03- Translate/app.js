//Prototype, Ajax, Callback

eventListeners();

function eventListeners() {

    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function () {
        //Arayuz işlemleri
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)
const ui = new UI();
function translateWord(e) {


    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord((err, text) => {
        if (err) { //err!=null
            console.error(err);
        } else {
            ui.displayTranslate(text);
        }
    });

    e.preventDefault();
}
