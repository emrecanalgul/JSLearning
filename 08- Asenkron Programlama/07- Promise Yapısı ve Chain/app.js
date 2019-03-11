
// function getData(data) {
//     return new Promise((resolve, reject)=> {

//         setTimeout(() => {

//             if (typeof data === "string") {
//                 resolve(data);
//             } else {
//                 reject("Hatalı Değer.");
//             }

//         }, 5000);
//     });
// }

// getData("deneme")
//     .then(resolve => console.log("Gelen Değer: " + resolve))
//     .catch(err => console.error(err));

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject("Hata: Sayı Değil.")
            }

        }, 5000);
    })
}

addTwo(25).then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => {
    console.log(response2)
    return response2 * 2;
}).then(responseEnd => {
    console.log(responseEnd);
}).catch(err => console.error(err));