setTimeout(function(){
    console.log("1 sn sonra çalıştı");
},1000);

let i=0;
let interval=setInterval(function(){
    i++
    console.log(i);
},1000)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(interval);
    console.log("interval durduruldu.");
});