const langs = ["Python", "C#", "Java", "Html"];

function addLangs(lang, callback) {
    setTimeout(() => {
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(() => {
        langs.forEach((lang) => {
            console.log(lang);
        })
    }, 1000);
}

addLangs("CSS", getAllLangs);