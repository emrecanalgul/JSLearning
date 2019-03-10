

class Response {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }


    get(URL, callback) {
        this.xhr.open("GET", URL);

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(this.xhr.responseText, null);
            } else {
                callback(null, "Bir Hata Oluştu.");
            }
        }

        this.xhr.send();
    }

    post(URL, data, callback) {
        this.xhr.open("POST", URL);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(this.xhr.responseText, null);
            } else {
                callback(null, "Bir hata oluştu");
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    put(URL, data, callback) {
        this.xhr.open("PUT", URL);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(this.xhr.responseText, null);
            } else {
                callback(null, "Bir hata oluştu");
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    delete(URL, callback) {
        this.xhr.open("DELETE", URL);

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback("Silme İşlemi Başarılı", null);
            } else {
                callback(null, "Bir Hata Oluştu.");
            }
        }

        this.xhr.send();
    }
}

let response = new Response();

//GET
// response.get("https://jsonplaceholder.typicode.com/comments", function (response, error) {
//     if (error === null) {
//         let responseArray = JSON.parse(response);
//         console.log(responseArray);
//     } else {
//         console.log(error);
//     }
// });

//POST
// response.post("https://jsonplaceholder.typicode.com/comments", { postId: "1", name: "Emre", email: "can.emre1995@gmail.com", body: "İçerik" }, function (response,error) {

//     if (error === null) {
//         console.log(JSON.parse(response));
//     } else {
//         console.log("Bir hata oluştu");
//     }
// });

//PUT
// response.put("https://jsonplaceholder.typicode.com/comments/10", { postId: "1", name: "Emre", email: "can.emre1995@gmail.com", body: "İçerik" }, function (response, error) {

//     if (error === null) {
//         console.log(JSON.parse(response));
//     } else {
//         console.log("Bir hata oluştu");
//     }
// });

//DELETE
//  response.delete("https://jsonplaceholder.typicode.com/comments/10", function (response, error) {
//      if (error === null) {
//          console.log(response);
//      } else {
//          console.log(error);
//      }
//  });
