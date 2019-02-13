//Alert

alert("Merhaba Dünya");

//Confirm
let cevap = confirm("Emin misiniz?");

if (cevap == true) {
    alert("Onaylandı.");
} else {
    alert("Onaylanmadı!");
}

//Kullanıcıdan Inpu Alma
let input = prompt("2 + 2 = ?");
if (typeof input != Number) {
    console.log("Number Dönüşümü Yapıldı.");
    let = Number(input);
}

if(input==4){
    alert("Sonuç Doğru.");
}else {
    alert("Yanlış Sonuç");
}

//Sayfa Yenileme Reload
if(confirm("Sayfa Yenilensin mi?")){
    window.location.reload();
}