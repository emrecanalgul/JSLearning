document.querySelector("#change").addEventListener("click", change);

function change() {

    const Url = "https://api.exchangeratesapi.io/latest";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", Url);


    xhr.onload = function () {

        if (this.status === 200) {

            const response=JSON.parse(this.responseText);
            const TRY=response.rates.TRY;
            
           const amount= document.querySelector("#amount").value;
           let result=amount*TRY;
            document.querySelector("#tl").value=result;

        }
    }
    xhr.send();
}