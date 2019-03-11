class Response {

    async get(URL) {
        // return new Promise((resolve, reject) => {
        //     fetch(URL)
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject("Bir Hata Oluştu"))
        // });
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }

    async  post(URL, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(URL, {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: { "Content-type": "application/json" }
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject("Bir Hata Oluştu"))
        // });

        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        });
        const res = response.json();
        return res;


    }

    async put(URL, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(URL, {
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: { "Content-type": "application/json" }
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject("Bir Hata Oluştu"))
        // });

        const response = await fetch(URL, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        });
        const res = response.json();
        return res;
    }

   async delete(URL) {
        // return new Promise((resolve, reject) => {
        //     fetch(URL, {
        //         method: 'DELETE',
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve("Başarılı Şekilde Sİlindi"))
        //         .catch(err => reject("Bir Hata Oluştu"))
        // });

        const response = await fetch(URL, {
            method: 'DELETE',
        });
        let data = "";
        if (response.status === 200) {
            data = "Veri Silme İşlemi Başarılıdır.";
        } else {
            data = "Silme İşlemi Başarısız";
        }

        return data;
    }
}

let response = new Response();
let result = null

response.get("https://jsonplaceholder.typicode.com/albums")
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.post("https://jsonplaceholder.typicode.com/albums", { userId: 5, title: "POST" })
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 5, title: "PUT" })
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));

response.delete("https://jsonplaceholder.typicode.com/albums/20")
    .then(data => {
        result = data;
        console.log(result);
    }).catch(err => console.error(err));