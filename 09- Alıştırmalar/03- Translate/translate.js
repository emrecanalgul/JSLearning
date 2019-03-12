function Translate(word, language) {
    this.apiKey = "trnsl.1.1.20190312T083522Z.795ebe6db4609179.4b1339f82c82b66868876ff081eefcd8ce58cc5c";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callbcak) {
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callbcak(null, text);

        } else {
            callbcak("Bir Hata Oluştu", null);
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}


