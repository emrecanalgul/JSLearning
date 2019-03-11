class Response {

    get(URL) {
        return new Promise((resolve, reject) => {
            fetch(URL)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject("Bir Hata Oluştu"))
        });
    }

    post(URL, data) {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject("Bir Hata Oluştu"))
        });
    }

    put(URL, data) {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject("Bir Hata Oluştu"))
        });
    }

    delete(URL) {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => resolve("Başarılı Şekilde Sİlindi"))
                .catch(err => reject("Bir Hata Oluştu"))
        });
    }
}

let response = new Response();
let result = null

response.get("https://jsonplaceholder.typicode.com/albums")
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.post("https://jsonplaceholder.typicode.com/albums", { userId: 5, title: "Deneme" })
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 5, title: "Deneme" })
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.delete("https://jsonplaceholder.typicode.com/albums/20", { userId: 5, title: "Deneme" })
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));